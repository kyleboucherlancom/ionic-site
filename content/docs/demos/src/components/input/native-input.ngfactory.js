/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './native-input';
export var Wrapper_NativeInput = (function () {
    function Wrapper_NativeInput(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.NativeInput(p0, p1, p2, p3);
    }
    Wrapper_NativeInput.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NativeInput.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
    };
    Wrapper_NativeInput.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NativeInput.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NativeInput.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'input')) {
            var pd_sub_0 = (this.context._change($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'keydown')) {
            var pd_sub_1 = (this.context._keyDown($event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'focus')) {
            var pd_sub_2 = (this.context._focus() !== false);
            result = (pd_sub_2 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_3 = (this.context._blur() !== false);
            result = (pd_sub_3 && result);
        }
        return result;
    };
    Wrapper_NativeInput.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.focusChange.subscribe(_eventHandler.bind(view, 'focusChange')));
        }
        if (emit1) {
            (this.subscription1 = this.context.valueChange.subscribe(_eventHandler.bind(view, 'valueChange')));
        }
        if (emit2) {
            (this.subscription2 = this.context.keydown.subscribe(_eventHandler.bind(view, 'keydown')));
        }
    };
    return Wrapper_NativeInput;
}());
export var Wrapper_NextInput = (function () {
    function Wrapper_NextInput() {
        this._changed = false;
        this.context = new import0.NextInput();
    }
    Wrapper_NextInput.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NextInput.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_NextInput.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NextInput.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NextInput.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'focus')) {
            var pd_sub_0 = (this.context.receivedFocus() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_NextInput.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.focused.subscribe(_eventHandler.bind(view, 'focused')));
        }
    };
    return Wrapper_NextInput;
}());
//# sourceMappingURL=native-input.ngfactory.js.map