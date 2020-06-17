/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$last_match', '$nil?', '$==', '$checkRoll', '$>', '$roll', '$collect', '$split', '$each', '$<=', '$+', '$empty?', '$!=', '$*']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Alsetto');

    var $nesting = [self].concat($parent_nesting), $Alsetto_initialize$1, $Alsetto_rollDiceCommand$2, $Alsetto_checkRoll$3;

    self.$$prototype.sortType = nil;
    
    Opal.const_set($nesting[0], 'ID', "Alsetto");
    Opal.const_set($nesting[0], 'NAME', "\u8A69\u7247\u306E\u30A2\u30EB\u30BB\u30C3\u30C8");
    Opal.const_set($nesting[0], 'SORT_KEY', "\u3046\u305F\u304B\u305F\u306E\u3042\u308B\u305B\u3064\u3068");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "\u30FB\u6210\u529F\u5224\u5B9A\uFF1AnAL[m]\u3000\u3000\u3000\u3000\u30FB\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\uFF1AnALC[m]\n" + "\u30FB\u547D\u4E2D\u5224\u5B9A\uFF1AnAL[m]*p\u3000\u3000\u3000\u30FB\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\uFF1AnALC[m]*p\n" + "\u30FB\u547D\u4E2D\u5224\u5B9A\uFF08\u30AC\u30F3\u30B9\u30EA\u30F3\u30AC\u30FC\u306E\u6839\u6E90\u8A69\uFF09\uFF1AnALG[m]*p\n" + "[]\u5185\u306F\u7701\u7565\u53EF\u80FD\u3002\n" + "\n" + "AL\u30B3\u30DE\u30F3\u30C9\u306F\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u306E\u5206\u3060\u3051\u3001\u81EA\u52D5\u3067\u632F\u308A\u8DB3\u3057\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002\n" + "\u300Cn\u300D\u3067\u30C0\u30A4\u30B9\u6570\u3092\u6307\u5B9A\u3002\n" + "\u300Cm\u300D\u3067\u76EE\u6A19\u5024\u3092\u6307\u5B9A\u3002\u7701\u7565\u6642\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u300C3\u300D\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\n" + "\u300Cp\u300D\u3067\u653B\u6483\u529B\u3092\u6307\u5B9A\u3002\u300C*\u300D\u306F\u300Cx\u300D\u3067\u3082\u53EF\u3002\n" + "\u653B\u6483\u529B\u6307\u5B9A\u3067\u547D\u4E2D\u5224\u5B9A\u3068\u306A\u308A\u3001\u6210\u529F\u6570\u3067\u306F\u306A\u304F\u3001\u30C0\u30E1\u30FC\u30B8\u3092\u7D50\u679C\u8868\u793A\u3057\u307E\u3059\u3002\n" + "\n" + "ALC\u30B3\u30DE\u30F3\u30C9\u306F\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\u3067\u3001\u6210\u529F\u6570\u3001\u30C0\u30E1\u30FC\u30B8\u3092\u7D50\u679C\u8868\u793A\u3057\u307E\u3059\u3002\n" + "ALG\u30B3\u30DE\u30F3\u30C9\u306F\u300C2\u4EE5\u4E0B\u300D\u3067\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002\n" + "\n" + "\u3010\u66F8\u5F0F\u4F8B\u3011\n" + "\u30FB5AL \u2192 5d6\u3067\u76EE\u6A19\u50243\u3002\n" + "\u30FB5ALC \u2192 5d6\u3067\u76EE\u6A19\u50243\u3002\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\u3002\n" + "\u30FB6AL2 \u2192 6d6\u3067\u76EE\u6A19\u50242\u3002\n" + "\u30FB4AL*5 \u2192 4d6\u3067\u76EE\u6A19\u50243\u3001\u653B\u6483\u529B5\u306E\u547D\u4E2D\u5224\u5B9A\u3002\n" + "\u30FB7AL2x10 \u2192 7d6\u3067\u76EE\u6A19\u50242\u3001\u653B\u6483\u529B10\u306E\u547D\u4E2D\u5224\u5B9A\u3002\n" + "\u30FB8ALC4x5 \u2192 8d6\u3067\u76EE\u6A19\u50244\u3001\u653B\u6483\u529B5\u3001\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\u306E\u547D\u4E2D\u5224\u5B9A\u3002\n");
    self.$setPrefixes(["\\d+AL(C|G)?(\\d+)?(x|\\*)\\d+", "\\d+ALC?(\\d+)?"]);
    
    Opal.def(self, '$initialize', $Alsetto_initialize$1 = function $$initialize() {
      var $iter = $Alsetto_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Alsetto_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $Alsetto_initialize$1, false), $zuper, $iter);
      return (self.sortType = 1);
    }, $Alsetto_initialize$1.$$arity = 0);
    
    Opal.def(self, '$rollDiceCommand', $Alsetto_rollDiceCommand$2 = function $$rollDiceCommand(command) {
      var $a, self = this, rapid = nil, isCritical = nil, criticalNumber = nil, target = nil, damage = nil;

      
      if ($truthy(/(\d+)AL(C|G)?(\d+)?((x|\*)(\d+))?$/i['$==='](command))) {
        
        rapid = $$($nesting, 'Regexp').$last_match(1).$to_i();
        isCritical = $$($nesting, 'Regexp').$last_match(2)['$nil?']();
        if ($truthy(isCritical)) {
          criticalNumber = 1
        } else if ($$($nesting, 'Regexp').$last_match(2)['$==']("G")) {
          
          isCritical = true;
          criticalNumber = 2;
        } else {
          criticalNumber = 0
        };
        target = ($truthy($a = $$($nesting, 'Regexp').$last_match(3)) ? $a : 3).$to_i();
        damage = ($truthy($a = $$($nesting, 'Regexp').$last_match(6)) ? $a : 0).$to_i();
        return self.$checkRoll(rapid, target, damage, isCritical, criticalNumber);};
      return nil;
    }, $Alsetto_rollDiceCommand$2.$$arity = 1);
    return (Opal.def(self, '$checkRoll', $Alsetto_checkRoll$3 = function $$checkRoll(rapid, target, damage, isCritical, criticalNumber) {
      var $a, $b, $c, $$4, $$5, self = this, totalSuccessCount = nil, totalCriticalCount = nil, text = nil, rollCount = nil, _dice = nil, diceText = nil, diceArray = nil, successCount = nil, criticalCount = nil, isDamage = nil, totalDamage = nil, result = nil;

      
      totalSuccessCount = 0;
      totalCriticalCount = 0;
      text = "";
      rollCount = rapid;
      while ($truthy($rb_gt(rollCount, 0))) {
        
        $c = self.$roll(rollCount, 6, self.sortType), $b = Opal.to_ary($c), (_dice = ($b[0] == null ? nil : $b[0])), (diceText = ($b[1] == null ? nil : $b[1])), $c;
        diceArray = $send(diceText.$split(/,/), 'collect', [], ($$4 = function(i){var self = $$4.$$s || this;

        
          
          if (i == null) {
            i = nil;
          };
          return i.$to_i();}, $$4.$$s = self, $$4.$$arity = 1, $$4));
        successCount = 0;
        criticalCount = 0;
        $send(diceArray, 'each', [], ($$5 = function(i){var self = $$5.$$s || this;

        
          
          if (i == null) {
            i = nil;
          };
          if ($truthy($rb_le(i, target))) {
            successCount = $rb_plus(successCount, 1)};
          if ($truthy($rb_le(i, criticalNumber))) {
            return (criticalCount = $rb_plus(criticalCount, 1))
          } else {
            return nil
          };}, $$5.$$s = self, $$5.$$arity = 1, $$5));
        totalSuccessCount = $rb_plus(totalSuccessCount, successCount);
        if (criticalCount['$=='](0)) {
        } else {
          totalCriticalCount = $rb_plus(totalCriticalCount, 1)
        };
        if ($truthy(text['$empty?']())) {
        } else {
          text = $rb_plus(text, "+")
        };
        text = $rb_plus(text, "" + (successCount) + "[" + (diceText) + "]");
        if ($truthy(isCritical)) {
        } else {
          break;
        };
        rollCount = criticalCount;
      };
      isDamage = damage['$!='](0);
      if ($truthy(isDamage)) {
        
        totalDamage = $rb_times(totalSuccessCount, damage);
        result = "" + "(" + (rapid) + "D6<=" + (target) + ") \uFF1E " + (text) + " \uFF1E Hits\uFF1A" + (totalSuccessCount) + "*" + (damage) + " \uFF1E " + (totalDamage) + "\u30C0\u30E1\u30FC\u30B8";
      } else {
        result = "" + "(" + (rapid) + "D6<=" + (target) + ") \uFF1E " + (text) + " \uFF1E \u6210\u529F\u6570\uFF1A" + (totalSuccessCount)
      };
      if ($truthy(isCritical)) {
        result = $rb_plus(result, "" + " / " + (totalCriticalCount) + "\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5")};
      return result;
    }, $Alsetto_checkRoll$3.$$arity = 5), nil) && 'checkRoll';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
