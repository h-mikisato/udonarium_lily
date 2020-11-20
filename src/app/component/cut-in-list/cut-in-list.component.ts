import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AudioFile } from '@udonarium/core/file-storage/audio-file';
import { AudioPlayer, VolumeType } from '@udonarium/core/file-storage/audio-player';
import { AudioStorage } from '@udonarium/core/file-storage/audio-storage';
import { FileArchiver } from '@udonarium/core/file-storage/file-archiver';
import { ObjectStore } from '@udonarium/core/synchronize-object/object-store';
import { Jukebox } from '@udonarium/Jukebox';
import { CutInLauncher } from '@udonarium/cut-in-launcher';

import { ModalService } from 'service/modal.service';
import { PanelOption, PanelService } from 'service/panel.service';



import { ImageFile } from '@udonarium/core/file-storage/image-file';
import { ImageStorage } from '@udonarium/core/file-storage/image-storage';
import { ObjectSerializer } from '@udonarium/core/synchronize-object/object-serializer';
//import { ObjectStore } from '@udonarium/core/synchronize-object/object-store';
import { EventSystem, Network } from '@udonarium/core/system';
import { CutIn } from '@udonarium/cut-in';

import { FileSelecterComponent } from 'component/file-selecter/file-selecter.component';
import { CutInBgmComponent } from 'component/cut-in-bgm/cut-in-bgm.component';
//import { ModalService } from 'service/modal.service';
//import { PanelService } from 'service/panel.service';
import { SaveDataService } from 'service/save-data.service';

import { PointerDeviceService } from 'service/pointer-device.service';

@Component({
  selector: 'app-cut-in-list',
  templateUrl: './cut-in-list.component.html',
  styleUrls: ['./cut-in-list.component.css']
})
export class CutInListComponent implements OnInit, OnDestroy {
  
  minSize: number = 10;
  maxSize: number = 1200;

  get cutInLauncher(): CutInLauncher { return ObjectStore.instance.get<CutInLauncher>('CutInLauncher'); }
  
  get cutInName(): string { return this.isEditable ? this.selectedCutIn.name : '' ; }
  set cutInName(cutInName: string) { if (this.isEditable) this.selectedCutIn.name = cutInName; }

  get cutInWidth(): number { return this.isEditable ? this.selectedCutIn.width : 0 ; }
  set cutInWidth(cutInWidth: number) { if (this.isEditable) this.selectedCutIn.width = cutInWidth; }

  get cutInHeight(): number { return this.isEditable ? this.selectedCutIn.height : 0 ; }
  set cutInHeight(cutInHeight: number) { if (this.isEditable) this.selectedCutIn.height = cutInHeight; }


  get cutInX_Pos(): number { return this.isEditable ? this.selectedCutIn.x_pos : 0 ; }
  set cutInX_Pos(cutInX_Pos: number) { if (this.isEditable) this.selectedCutIn.x_pos = cutInX_Pos; }

  get cutInY_Pos(): number { return this.isEditable ? this.selectedCutIn.y_pos : 0 ; }
  set cutInY_Pos(cutInY_Pos: number) { if (this.isEditable) this.selectedCutIn.y_pos = cutInY_Pos; }

  get cutInOriginalSize(): boolean { return this.isEditable ? this.selectedCutIn.originalSize : false ; }
  set cutInOriginalSize(cutInOriginalSize: boolean) { if (this.isEditable) this.selectedCutIn.originalSize = cutInOriginalSize; }

  get cutInIsLoop(): boolean { return this.isEditable ? this.selectedCutIn.isLoop : false ; }
  set cutInIsLoop(cutInIsLoop: boolean) { if (this.isEditable) this.selectedCutIn.isLoop = cutInIsLoop; }

  get cutInOutTime(): number { return this.isEditable ? this.selectedCutIn.outTime : 0 ; }
  set cutInOutTime(cutInOutTime: number) { if (this.isEditable) this.selectedCutIn.outTime = cutInOutTime; }

  get cutInUseOutUrl(): boolean { return this.isEditable ? this.selectedCutIn.useOutUrl : false ; }
  set cutInUseOutUrl(cutInUseOutUrl: boolean) { if (this.isEditable) this.selectedCutIn.useOutUrl = cutInUseOutUrl; }

  get cutInOutUrl(): string { return this.isEditable ? this.selectedCutIn.outUrl : '' ; }
  set cutInOutUrl(cutInOutUrl: string) { if (this.isEditable) this.selectedCutIn.outUrl = cutInOutUrl; }

  get cutInTagName(): string { return this.isEditable ? this.selectedCutIn.tagName : '' ; }
  set cutInTagName(cutInTagName: string) { if (this.isEditable) this.selectedCutIn.tagName = cutInTagName; }

  get cutInAudioName(): string { return this.isEditable ? this.selectedCutIn.audioName : '' ; }
  set cutInAudioName(cutInAudioName: string) { if (this.isEditable) this.selectedCutIn.audioName = cutInAudioName; }

  get cutInAudioIdentifier(): string { return this.isEditable ? this.selectedCutIn.audioIdentifier : '' ; }
  set cutInAudioIdentifier(cutInAudioIdentifier: string) { if (this.isEditable) this.selectedCutIn.audioIdentifier = cutInAudioIdentifier; }

  get audios(): AudioFile[] { return AudioStorage.instance.audios.filter(audio => !audio.isHidden); }

/*
  get volume(): number { return AudioPlayer.volume; }
  set volume(volume: number) { AudioPlayer.volume = volume; }

  get auditionVolume(): number { return AudioPlayer.auditionVolume; }
  set auditionVolume(auditionVolume: number) { AudioPlayer.auditionVolume = auditionVolume; }
*/


  get cutInImage(): ImageFile {
    if (!this.selectedCutIn) return ImageFile.Empty;
    let file = ImageStorage.instance.get(this.selectedCutIn.imageIdentifier);
    return file ? file : ImageFile.Empty;
  }
  
  
//  get cutInList(): CutInList { return ObjectStore.instance.get<CutInList>('CutInList'); }

  private lazyUpdateTimer: NodeJS.Timer = null;
  selectedCutIn: CutIn = null;

  get isSelected(): boolean { return this.selectedCutIn ? true : false; }
  get isEditable(): boolean {
    return !this.isEmpty && this.isSelected;
  }
//  get isEmpty(): boolean { return this.cutInSelecter ? (this.cutInSelecter.viewCutIn ? false : true) : true; }
  get isEmpty(): boolean { return false ; }


  
/*

  get audios(): AudioFile[] { return AudioStorage.instance.audios.filter(audio => !audio.isHidden); }
  get jukebox(): Jukebox { return ObjectStore.instance.get<Jukebox>('Jukebox'); }

  readonly auditionPlayer: AudioPlayer = new AudioPlayer();
  private lazyUpdateTimer: NodeJS.Timer = null;
*/
  constructor(
    private pointerDeviceService: PointerDeviceService,//
    private modalService: ModalService,
    private saveDataService: SaveDataService,
    private panelService: PanelService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    Promise.resolve().then(() => this.modalService.title = this.panelService.title = 'カットインリスト');
/*
    this.auditionPlayer.volumeType = VolumeType.AUDITION;
    EventSystem.register(this)
      .on('*', event => {
        if (event.eventName.startsWith('FILE_')) this.lazyNgZoneUpdate();
      });
*/
  }

  ngOnDestroy() {
    EventSystem.unregister(this);
//    this.stop();
  }


  selectCutIn(identifier: string) {
    this.selectedCutIn = ObjectStore.instance.get<CutIn>(identifier);
//    this.selectedCutInXml = '';
  }

  getCutIns(): CutIn[] {
    return ObjectStore.instance.getObjects(CutIn);
  }

  createCutIn() {
    let cutIn = new CutIn();
    cutIn.name = '未設定のカットイン';
    cutIn.imageIdentifier = 'testTableBackgroundImage_image';
    cutIn.initialize();
    this.selectCutIn(cutIn.identifier);
  }

  save() {
    if (!this.selectedCutIn) return;
    this.selectedCutIn.selected = true;
    this.saveDataService.saveGameObject(this.selectedCutIn, 'cut_' + this.selectedCutIn.name);
  }

  delete() {
    if (!this.isEmpty && this.selectedCutIn) {
//      this.selectedCutInXml = this.selectedCutIn.toXml();
      this.selectedCutIn.destroy();
      this.selectedCutIn = null;
    }
  }

  openCutInImageModal() {
    if (!this.isSelected) return;
    this.modalService.open<string>(FileSelecterComponent).then(value => {
      if (!this.selectedCutIn || !value) return;
      this.selectedCutIn.imageIdentifier = value;
    });
  }

  openCutInBgmModal() {
    if (!this.isSelected) return;
    this.modalService.open<string>(CutInBgmComponent).then(value => {
      console.log('CUTIN '+ value);
      if (!this.selectedCutIn || !value) return;

      this.cutInAudioIdentifier = value;
      
      let audio = AudioStorage.instance.get(value);
      if( audio ){
        this.cutInAudioName = audio.name;
        console.log('cutInAudioName'+ this.cutInAudioName);
      }
    });
  }


  isCutInBgmUploaded() {
    if (!this.isSelected) return false;

    let audio = AudioStorage.instance.get( this.cutInAudioIdentifier );
    return audio ? true : false ;
  }


  previewCutIn(){
    
    //jukuと同じにする
  }
  stoppreviewCutIn(){
    
    //jukuと同じにする
    
  }

  playCutIn(){ //通常BGMの駆動は保留
    if(!this.isSelected) return;
    this.cutInLauncher.startCutIn( this.selectedCutIn );
    
/*
    if(!this.isSelected) return;
    let isBgm = this.isCutInBgmUploaded();
    this.selectedCutIn.playAll(isBgm);
*/
  }

  stopCutIn(){
    if(!this.isSelected) return;
    this.cutInLauncher.stopCutIn( this.selectedCutIn );
/*    
    let tag = this.cutInTagName;
    this.selectedCutIn.stopAll();
*/    
//    for( let audio  of this.audios ){
//      if( audio.tagName == tag ){
//        audio.stopAll();
//      }
 //     
//    }
    
  }

/*
    let coordinate = this.pointerDeviceService.pointers[0];
    let option: PanelOption = { left: coordinate.x+25, top: coordinate.y+25, width: 600, height: 600 };
    this.panelService.open<CutInBgmComponent>(CutInBgmComponent, option);
*/
/*
    this.modalService.open<string>(CuiInBgmComponent).then(value => {
      if (!this.selectedCutIn || !value) return;
      this.selectedCutIn.audioIdentifier = value;
    });
*/
  }