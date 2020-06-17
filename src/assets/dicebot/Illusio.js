/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$last_match', '$delete', '$sort', '$uniq', '$!', '$nil?', '$checkRoll', '$roll', '$collect', '$split', '$each', '$>', '$count', '$push', '$+', '$join', '$<']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Illusio');

    var $nesting = [self].concat($parent_nesting), $Illusio_initialize$1, $Illusio_rollDiceCommand$2, $Illusio_checkRoll$3;

    self.$$prototype.sortType = nil;
    
    Opal.const_set($nesting[0], 'ID', "Illusio");
    Opal.const_set($nesting[0], 'NAME', "\u6643\u5929\u306E\u30A4\u30EB\u30FC\u30B8\u30AA");
    Opal.const_set($nesting[0], 'SORT_KEY', "\u3044\u308B\u3046\u3057\u304A");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "\u5224\u5B9A\uFF1A[n]IL(BNo)[P]\n" + "\n" + "[]\u5185\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u7701\u7565\u53EF\u80FD\u3002\n" + "\u300Cn\u300D\u3067\u30C0\u30A4\u30B9\u6570\u3092\u6307\u5B9A\u3002\u7701\u7565\u6642\u306F\u300C1\u300D\u3002\n" + "(BNo)\u3067\u30D6\u30ED\u30C3\u30AF\u30CA\u30F3\u30D0\u30FC\u3092\u6307\u5B9A\u3002\u300C236\u300D\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3002\u9806\u4E0D\u540C\u53EF\u3002\n" + "\u30B3\u30DE\u30F3\u30C9\u672B\u306B\u300CP\u300D\u3092\u6307\u5B9A\u3067\u3001(BNo)\u306E\u30D1\u30EA\u30A3\u5224\u5B9A\u3002\uFF08\u4E00\u5FDC\u3001\u8907\u6570\u6307\u5B9A\u53EF\uFF09\n" + "\n" + "\u3010\u66F8\u5F0F\u4F8B\u3011\n" + "\u30FB6IL236 \u2192 6d\u3067\u30D6\u30ED\u30C3\u30AF\u30CA\u30F3\u30D0\u30FC\u300C2,3,6\u300D\u306E\u5224\u5B9A\u3002\n" + "\u30FBIL4512 \u2192 1d\u3067\u30D6\u30ED\u30C3\u30AF\u30CA\u30F3\u30D0\u30FC\u300C1,2,4,5\u300D\u306E\u5224\u5B9A\u3002\n" + "\u30FB2IL1P \u2192 2d\u3067\u30D1\u30EA\u30A3\u30CA\u30F3\u30D0\u30FC\u300C1\u300D\u306E\u5224\u5B9A\u3002\n");
    
    Opal.def(self, '$initialize', $Illusio_initialize$1 = function $$initialize() {
      var $iter = $Illusio_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Illusio_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $Illusio_initialize$1, false), $zuper, $iter);
      return (self.sortType = 1);
    }, $Illusio_initialize$1.$$arity = 0);
    self.$setPrefixes(["(\\d+)?IL([1-6])?([1-6])?([1-6])?([1-6])?([1-6])?([1-6])?(P)?"]);
    
    Opal.def(self, '$rollDiceCommand', $Illusio_rollDiceCommand$2 = function $$rollDiceCommand(command) {
      var $a, self = this, diceCount = nil, blockNo = nil, isParry = nil;

      
      if ($truthy(/(\d+)?IL([1-6])?([1-6])?([1-6])?([1-6])?([1-6])?([1-6])?(P)?$/i['$==='](command))) {
        
        diceCount = ($truthy($a = $$($nesting, 'Regexp').$last_match(1)) ? $a : 1).$to_i();
        blockNo = [($truthy($a = $$($nesting, 'Regexp').$last_match(2)) ? $a : 0).$to_i(), ($truthy($a = $$($nesting, 'Regexp').$last_match(3)) ? $a : 0).$to_i(), ($truthy($a = $$($nesting, 'Regexp').$last_match(4)) ? $a : 0).$to_i(), ($truthy($a = $$($nesting, 'Regexp').$last_match(5)) ? $a : 0).$to_i(), ($truthy($a = $$($nesting, 'Regexp').$last_match(6)) ? $a : 0).$to_i(), ($truthy($a = $$($nesting, 'Regexp').$last_match(7)) ? $a : 0).$to_i()];
        blockNo.$delete(0);
        blockNo = blockNo.$sort();
        blockNo = blockNo.$uniq();
        isParry = $$($nesting, 'Regexp').$last_match(8)['$nil?']()['$!']();
        return self.$checkRoll(diceCount, blockNo, isParry);};
      return nil;
    }, $Illusio_rollDiceCommand$2.$$arity = 1);
    return (Opal.def(self, '$checkRoll', $Illusio_checkRoll$3 = function $$checkRoll(diceCount, blockNo, isParry) {
      var $a, $b, $$4, $$5, self = this, _dice = nil, diceText = nil, diceArray = nil, resultArray = nil, success = nil, blockText = nil, blockText2 = nil, resultText = nil, result = nil;

      
      $b = self.$roll(diceCount, 6, self.sortType), $a = Opal.to_ary($b), (_dice = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceArray = $send(diceText.$split(/,/), 'collect', [], ($$4 = function(i){var self = $$4.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return i.$to_i();}, $$4.$$s = self, $$4.$$arity = 1, $$4));
      resultArray = [];
      success = 0;
      $send(diceArray, 'each', [], ($$5 = function(i){var self = $$5.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        if ($truthy($rb_gt(blockNo.$count(i), 0))) {
          return resultArray.$push("\u00D7")
        } else {
          
          resultArray.$push(i);
          return (success = $rb_plus(success, 1));
        };}, $$5.$$s = self, $$5.$$arity = 1, $$5));
      blockText = blockNo.$join(",");
      blockText2 = "Block";
      if ($truthy(isParry)) {
        blockText2 = "Parry"};
      resultText = resultArray.$join(",");
      result = "" + (diceCount) + "D6(" + (blockText2) + ":" + (blockText) + ") \uFF1E " + (diceText) + " \uFF1E " + (resultText) + " \uFF1E ";
      if ($truthy(isParry)) {
        if ($truthy($rb_lt(success, diceCount))) {
          result = $rb_plus(result, "\u30D1\u30EA\u30A3\u6210\u7ACB\uFF01\u3000\u6B21\u306E\u975E\u30C0\u30E1\u30FC\u30B82\u500D\u3002")
        } else {
          result = $rb_plus(result, "" + "\u6210\u529F\u6570\uFF1A" + (success) + "\u3000\u30D1\u30EA\u30A3\u5931\u6557")
        }
      } else {
        result = $rb_plus(result, "" + "\u6210\u529F\u6570\uFF1A" + (success))
      };
      return result;
    }, $Illusio_checkRoll$3.$$arity = 3), nil) && 'checkRoll';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
