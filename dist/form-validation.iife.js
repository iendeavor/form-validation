(function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    function toString(object) {
        return Object.prototype.toString.call(object);
    }
    function isPlainObject(object) {
        return toString(object) === '[object Object]';
    }
    function isArray(object) {
        return toString(object) === '[object Array]';
    }
    function isFunction(object) {
        return typeof object === 'function';
    }
    function isPromise(object) {
        return object !== null && typeof object === 'object' && isFunction(object.then);
    }
    function hasKey(object, key) {
        return object.hasOwnProperty(key);
    }
    function getByPath(object, path) {
        if (path.length === 0)
            return object;
        var deepestParent = object;
        path.slice(0, -1).forEach(function (p) {
            deepestParent = deepestParent[p];
        });
        return deepestParent[path[path.length - 1]];
    }
    function noop() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }

    var privateKey = '__form_validation__';
    var publicKey = '$v';
    var pathKey = 'path';
    var proxyKey = '__form_validation_reactive';
    var collectedKey = '__form_validation_collected';
    var validationWrap = function (object, clone, path) {
        var _a;
        if (isPlainObject(object) || isArray(object)) {
            Object.defineProperty(object, proxyKey, {
                enumerable: false,
                configurable: true,
                value: object,
            });
        }
        if (isPlainObject(clone) || isArray(clone)) {
            Object.defineProperty(clone, proxyKey, {
                enumerable: false,
                configurable: true,
                value: clone,
            });
            Object.defineProperty(clone, privateKey, {
                enumerable: false,
                configurable: true,
                value: clone[privateKey] || (_a = {},
                    _a[pathKey] = path,
                    _a),
            });
            Object.defineProperty(clone, publicKey, {
                enumerable: false,
                configurable: true,
                value: clone[publicKey] || {},
            });
        }
    };
    var updateNestedPath = function (clone, path) {
        var _a;
        if (isPlainObject(clone) === false && isArray(clone) === false)
            return;
        (_a = clone[privateKey][pathKey]).splice.apply(_a, __spreadArrays([0, path.length], path));
        for (var key in clone) {
            updateNestedPath(clone[key], path.concat(key));
        }
    };
    var operations = new Set(['shift', 'unshift', 'reverse', 'splice']);
    var proxyStructure = function (_a) {
        var object = _a.object, clone = _a.clone, _b = _a.path, path = _b === void 0 ? [] : _b, _c = _a.wrap, wrap = _c === void 0 ? validationWrap : _c, _d = _a.callback, callback = _d === void 0 ? function () { } : _d;
        wrap(object, clone, path);
        if (isPlainObject(clone) || isArray(clone))
            callback(clone);
        if (isPlainObject(object) === false && isArray(object) === false)
            return object;
        for (var _i = 0, _e = Object.keys(object); _i < _e.length; _i++) {
            var key = _e[_i];
            Reflect.set(clone, key, clone[key] || (isArray(object[key]) ? [] : {}));
            Reflect.set(object, key, proxyStructure({
                object: object[key],
                clone: clone[key],
                path: path.concat(key),
                wrap: wrap,
                callback: callback,
            }));
        }
        for (var key in clone) {
            if (hasKey(object, key) === false) {
                delete clone[key];
            }
        }
        var operation = null;
        var totalOperationCount = 0;
        var operationCount = 0;
        var gettingValues = [];
        var accessOrder = [];
        var settingKeys = [];
        return new Proxy(object, {
            deleteProperty: function (target, key) {
                Reflect.deleteProperty(clone, key);
                return Reflect.deleteProperty(target, key);
            },
            set: function (target, key, value) {
                var result = Reflect.set(target, key, value);
                if (hasKey(target, key) === false)
                    return result;
                if (isArray(target)) {
                    if (operation === 'shift') {
                        if (key === 'length') {
                            gettingValues.reverse();
                            gettingValues.pop();
                            clone.length = 0;
                            var key_1 = 0;
                            while (key_1 < gettingValues.length) {
                                var value_1 = gettingValues[key_1];
                                value_1[privateKey][pathKey] = value_1[privateKey][pathKey]
                                    .slice(0, -1)
                                    .concat(gettingValues.length - key_1 - 1 + '');
                                clone.push(value_1);
                                ++key_1;
                            }
                            clone.reverse();
                            operation = null;
                            updateNestedPath(clone, clone[privateKey][pathKey]);
                            for (var key_2 in clone) {
                                callback(clone[key_2]);
                            }
                            return result;
                        }
                        else if (/^\d+$/.test(key)) {
                            clone[key] = isArray(value) ? [] : {};
                        }
                    }
                    else if (operation === 'unshift') {
                        if (key === 'length') {
                            clone.length = 0;
                            var key_3 = 0;
                            while (key_3 < gettingValues.length) {
                                var value_2 = gettingValues[key_3];
                                value_2[privateKey][pathKey] = value_2[privateKey][pathKey]
                                    .slice(0, -1)
                                    .concat(gettingValues.length - key_3 - 1 + '');
                                clone.push(value_2);
                                ++key_3;
                            }
                            clone.reverse();
                            operation = null;
                            updateNestedPath(clone, clone[privateKey][pathKey]);
                            for (var key_4 in clone) {
                                callback(clone[key_4]);
                            }
                            return result;
                        }
                        else if (/^\d+$/.test(key)) {
                            clone[key] = isArray(value) ? [] : {};
                            if (key === '0') {
                                gettingValues.push(clone[0]);
                            }
                        }
                    }
                    else if (operation === 'reverse') {
                        if (/^\d+$/.test(key)) {
                            var value_3 = gettingValues.pop();
                            value_3[privateKey][pathKey] = value_3[privateKey][pathKey].slice(0, -1).concat(key);
                            clone[key] = value_3;
                            ++operationCount;
                            if (operationCount === totalOperationCount) {
                                updateNestedPath(clone, clone[privateKey][pathKey]);
                                for (var key_5 in clone) {
                                    callback(clone[key_5]);
                                }
                                operation = null;
                            }
                            return result;
                        }
                    }
                    else if (operation === 'splice') {
                        if (key === 'length') {
                            operation = null;
                            clone[key] = value;
                            for (var index in accessOrder) {
                                var _a = accessOrder[index], method = _a.method, key_6 = _a.key, value_4 = _a.value;
                                var prevIndex = parseInt(index, 10) - 1;
                                if (method === 'set') {
                                    if (prevIndex >= 0 && accessOrder[prevIndex].method === 'get') {
                                        clone[key_6] = accessOrder[prevIndex].value;
                                    }
                                    else {
                                        clone[key_6] = value_4;
                                    }
                                }
                            }
                            updateNestedPath(clone, clone[privateKey][pathKey]);
                            for (var key_7 in clone) {
                                clone[key_7][privateKey][pathKey] = clone[key_7][privateKey][pathKey].slice(0, -1).concat(key_7 + '');
                                callback(clone[key_7]);
                            }
                            return result;
                        }
                        else if (/^\d+$/.test(key)) {
                            clone[key] = isArray(value) ? [] : {};
                            accessOrder.push({ method: 'set', key: key, value: clone[key] });
                        }
                    }
                    else if (key === 'length') {
                        clone.length = value;
                        return result;
                    }
                }
                if (isArray(value)) {
                    clone[key] = clone[key] || [];
                    clone[key].length = value.length;
                }
                else {
                    clone[key] = clone[key] || {};
                }
                return Reflect.set(target, key, proxyStructure({
                    object: value,
                    clone: clone[key],
                    path: path.concat(key),
                    wrap: wrap,
                    callback: callback,
                }));
            },
            get: function (target, key) {
                var result = Reflect.get(target, key);
                if (isArray(target)) {
                    if (operations.has(key)) {
                        operation = key;
                        operationCount = 0;
                        gettingValues.length = 0;
                        accessOrder.length = 0;
                        settingKeys.length = 0;
                        for (var key_8 in clone) {
                            delete clone[key_8][collectedKey];
                        }
                    }
                    else if (operation !== null) {
                        if (operation === 'shift') {
                            if (/^\d+$/.test(key)) {
                                if (clone[key] && clone[key][collectedKey] === undefined) {
                                    Object.defineProperty(clone[key], collectedKey, {
                                        enumerable: false,
                                        configurable: true,
                                        value: clone[key],
                                    });
                                    gettingValues.push(clone[key]);
                                }
                            }
                        }
                        else if (operation === 'unshift') {
                            if (/^\d+$/.test(key)) {
                                if (clone[key] && clone[key][collectedKey] === undefined) {
                                    Object.defineProperty(clone[key], collectedKey, {
                                        enumerable: false,
                                        configurable: true,
                                        value: clone[key],
                                    });
                                    gettingValues.push(clone[key]);
                                }
                            }
                        }
                        else if (operation === 'reverse') {
                            if (key === 'length') {
                                if (target[key] <= 1) {
                                    operation = null;
                                    totalOperationCount = 0;
                                }
                                else {
                                    totalOperationCount = result % 2 === 0 ? result : result - 1;
                                }
                            }
                            else if (/^\d+$/.test(key)) {
                                if (clone[key] && clone[key][collectedKey] === undefined) {
                                    Object.defineProperty(clone[key], collectedKey, {
                                        enumerable: false,
                                        configurable: true,
                                        value: clone[key],
                                    });
                                    gettingValues.push(clone[key]);
                                }
                            }
                        }
                        else if (operation === 'splice') {
                            if (/^\d+$/.test(key)) {
                                if (clone[key] && clone[key][collectedKey] === undefined) {
                                    Object.defineProperty(clone[key], collectedKey, {
                                        enumerable: false,
                                        configurable: true,
                                        value: clone[key],
                                    });
                                    accessOrder.push({ method: 'get', key: key, value: clone[key] });
                                }
                            }
                        }
                    }
                }
                return result;
            },
        });
    };

    var schemaKey = 'schema';
    var createDefaultSchema = function () {
        return {
            $params: {},
            $normalizer: function (_a) {
                var value = _a.value;
                return value;
            },
            $rules: {},
            $errors: {},
        };
    };
    var wrapSchema = function (_a) {
        var rootSchema = _a.rootSchema, validator = _a.validator;
        var path = validator[privateKey][pathKey];
        // init
        var defaultSchema = createDefaultSchema();
        validator[privateKey][schemaKey] = (validator[privateKey][schemaKey] || {});
        validator[privateKey][schemaKey].$params = defaultSchema.$params;
        validator[privateKey][schemaKey].$normalizer = defaultSchema.$normalizer;
        validator[privateKey][schemaKey].$rules = defaultSchema.$rules;
        validator[privateKey][schemaKey].$errors = defaultSchema.$errors;
        applyMostAppropriateSchema({ rootSchema: rootSchema, validator: validator, path: path.slice(), startIndex: 0 });
        // normalize errors
        for (var key in validator[privateKey][schemaKey].$rules) {
            if (validator[privateKey][schemaKey].$errors[key] === undefined) {
                validator[privateKey][schemaKey].$errors[key] = noop;
            }
        }
    };
    var applyMostAppropriateSchema = function (_a) {
        var rootSchema = _a.rootSchema, validator = _a.validator, path = _a.path, startIndex = _a.startIndex;
        if (startIndex === path.length) {
            try {
                var schema = getByPath(rootSchema, path);
                if (shouldUseSchema(schema)) {
                    if (isPlainObject(schema.$params))
                        validator[privateKey][schemaKey].$params = schema.$params;
                    if (isFunction(schema.$normalizer))
                        validator[privateKey][schemaKey].$normalizer = schema.$normalizer;
                    if (isPlainObject(schema.$rules))
                        validator[privateKey][schemaKey].$rules = schema.$rules;
                    if (isPlainObject(schema.$errors))
                        validator[privateKey][schemaKey].$errors = schema.$errors;
                    return true;
                }
            }
            catch (error) { }
            return false;
        }
        // dedicate
        if (applyMostAppropriateSchema({ rootSchema: rootSchema, validator: validator, path: path, startIndex: startIndex + 1 }))
            return true;
        // iter
        var oldKey = path[startIndex];
        path[startIndex] = '$iter';
        if (applyMostAppropriateSchema({ rootSchema: rootSchema, validator: validator, path: path, startIndex: startIndex + 1 }))
            return true;
        path[startIndex] = oldKey;
        return false;
    };
    var shouldUseSchema = function (schema) {
        if (schema === undefined)
            return false;
        if (schema.$params !== undefined)
            return true;
        if (schema.$normalizer !== undefined)
            return true;
        if (schema.$rules !== undefined)
            return true;
        if (schema.$errors !== undefined)
            return true;
        return false;
    };

    var rulesResultKey = '$rules';
    var validate = function (_a) {
        var _b, _c;
        var rootForm = _a.rootForm, validator = _a.validator;
        var params = __assign((_b = {}, _b[rulesResultKey] = {}, _b), validator[privateKey][schemaKey].$params);
        var normalizer = validator[privateKey][schemaKey].$normalizer;
        var rules = validator[privateKey][schemaKey].$rules;
        var errors = validator[privateKey][schemaKey].$errors;
        var root = rootForm;
        var path = validator[privateKey][pathKey];
        var parent = path.length === 0 ? undefined : getByPath(rootForm, path.slice(0, -1));
        var key = path.length === 0 ? undefined : path[path.length - 1];
        var value = normalizer({
            value: path.length === 0 ? rootForm : getByPath(rootForm, path),
            key: key,
            parent: parent,
            path: path,
            root: root,
            params: params,
        });
        var result = (_c = {}, _c[rulesResultKey] = {}, _c);
        var _loop_1 = function (ruleKey) {
            var functionParams = { value: value, key: key, parent: parent, path: path, root: root, params: params };
            var validationResult = rules[ruleKey](functionParams);
            result[rulesResultKey][ruleKey] = validationResult;
            functionParams.params[rulesResultKey][ruleKey] = validationResult;
            result[ruleKey] = undefined;
            if (isPromise(validationResult)) {
                validationResult.finally(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, validationResult];
                            case 1:
                                if ((_a.sent()) !== undefined) {
                                    result[ruleKey] = errors[ruleKey](functionParams);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            else if (validationResult !== undefined) {
                result[ruleKey] = errors[ruleKey](functionParams);
            }
        };
        for (var _i = 0, _d = Object.keys(rules); _i < _d.length; _i++) {
            var ruleKey = _d[_i];
            _loop_1(ruleKey);
        }
        return result;
    };

    function wrapState(validator) {
        var theValidator = validator;
        if (theValidator[privateKey].invalid !== undefined)
            return;
        theValidator[privateKey].invalid = false;
        theValidator[privateKey].validated = false;
        theValidator[privateKey].pending = 0;
        theValidator[privateKey].dirty = false;
        theValidator[privateKey].setValidated = setPrivateValidated(theValidator);
        theValidator[privateKey].setInvalid = setPrivateInvalid(theValidator);
        theValidator[privateKey].setDirty = setPrivateDirty(theValidator);
        theValidator[privateKey].setPending = setPrivatePending(theValidator);
        theValidator[privateKey].resetPending = resetPrivatePending(theValidator);
        theValidator[publicKey].pending = getPending(theValidator);
        theValidator[publicKey].invalid = getInvalid(theValidator);
        theValidator[publicKey].dirty = getDirty(theValidator);
        theValidator[publicKey].anyDirty = getAnyDirty(theValidator);
        theValidator[publicKey].error = getError(theValidator);
        theValidator[publicKey].anyError = getAnyError(theValidator);
        theValidator[publicKey].errors = {};
    }
    var setPrivateValidated = function (validator) { return function (value) {
        validator[privateKey].validated = value;
    }; };
    var setPrivateInvalid = function (validator) { return function (value) {
        validator[privateKey].invalid = value;
        validator[publicKey].invalid = getInvalid(validator);
        validator[publicKey].error = getError(validator);
        validator[publicKey].anyError = getAnyError(validator);
    }; };
    var setPrivateDirty = function (validator) { return function (value) {
        validator[privateKey].dirty = value;
        validator[publicKey].dirty = getDirty(validator);
        validator[publicKey].anyDirty = getAnyDirty(validator);
        validator[publicKey].error = getError(validator);
        validator[publicKey].anyError = getAnyError(validator);
    }; };
    var setPrivatePending = function (validator) { return function (value) {
        validator[privateKey].pending += value === true ? 1 : -1;
        validator[publicKey].pending = getPending(validator);
        validator[publicKey].invalid = getInvalid(validator);
        validator[publicKey].error = getError(validator);
        validator[publicKey].anyError = getAnyError(validator);
    }; };
    var resetPrivatePending = function (validator) { return function () {
        validator[privateKey].pending = 0;
        validator[publicKey].pending = getPending(validator);
        validator[publicKey].invalid = getInvalid(validator);
        validator[publicKey].error = getError(validator);
        validator[publicKey].anyError = getAnyError(validator);
    }; };
    var getPending = function (validator) {
        return (validator[privateKey].pending !== 0 ||
            getNested(validator).some(function (nestedValidator) { return nestedValidator[publicKey].pending; }));
    };
    var getInvalid = function (validator) {
        return ((validator[privateKey].invalid && validator[privateKey].pending === 0) ||
            getNested(validator).some(function (nestedValidator) { return nestedValidator[publicKey].invalid; }));
    };
    var getDirty = function (validator) {
        return (validator[privateKey].dirty ||
            (getNested(validator).length !== 0 &&
                getNested(validator).every(function (nestedValidator) { return nestedValidator[publicKey].dirty; })));
    };
    var getAnyDirty = function (validator) {
        return (validator[privateKey].dirty || getNested(validator).some(function (nestedValidator) { return nestedValidator[publicKey].anyDirty; }));
    };
    var getError = function (validator) {
        return validator[privateKey].dirty && validator[privateKey].invalid && validator[privateKey].pending === 0;
    };
    var getAnyError = function (validator) {
        return ((validator[privateKey].dirty && validator[privateKey].invalid && validator[privateKey].pending === 0) ||
            getNested(validator).some(function (nestedValidator) { return nestedValidator[publicKey].anyError; }));
    };
    var getNested = function (validator) {
        return Object.keys(validator)
            .filter(function (key) { return key !== privateKey && key !== publicKey; })
            .map(function (key) { return validator[key]; });
    };

    var proxy = function (_a) {
        var form = _a.form, schema = _a.schema, validator = _a.validator, hooks = _a.hooks;
        return proxyStructure({
            object: form,
            clone: validator,
            callback: function (baseValidator) {
                wrapState(baseValidator);
                wrapSchema({ rootSchema: schema, validator: baseValidator });
                wrapMethods(form, baseValidator);
                if (baseValidator[privateKey].validated) {
                    baseValidator[publicKey].validate();
                }
                hooks && hooks.onChanged && hooks.onChanged(baseValidator);
            },
        });
    };
    var wrapMethods = function (rootForm, validator) {
        var schema = validator[privateKey][schemaKey];
        var $validate = function () {
            validator[privateKey].setValidated(true);
            validator[privateKey].setInvalid(false);
            validator[privateKey].resetPending();
            validator[publicKey].errors = {};
            validator[privateKey].previousResult = {};
            var result = validate({ rootForm: rootForm, validator: validator });
            validator[privateKey].previousResult = result[rulesResultKey];
            result[rulesResultKey] = validator[privateKey].previousResult;
            var _loop_1 = function (ruleKey) {
                if (isPromise(result[rulesResultKey][ruleKey])) {
                    validator[privateKey].setPending(true);
                    result[rulesResultKey][ruleKey].finally(function () { return __awaiter(void 0, void 0, void 0, function () {
                        var ruleResult, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    // ignore previous promise
                                    if (validator[privateKey].previousResult !== result[rulesResultKey])
                                        return [2 /*return*/];
                                    return [4 /*yield*/, result[rulesResultKey][ruleKey]];
                                case 1:
                                    ruleResult = _c.sent();
                                    if (!(ruleResult !== undefined)) return [3 /*break*/, 3];
                                    validator[privateKey].setInvalid(true);
                                    _a = validator[publicKey].errors;
                                    _b = ruleKey;
                                    return [4 /*yield*/, result[ruleKey]];
                                case 2:
                                    _a[_b] = _c.sent();
                                    _c.label = 3;
                                case 3:
                                    validator[privateKey].setPending(false);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else {
                    if (result[rulesResultKey][ruleKey] !== undefined) {
                        validator[privateKey].setInvalid(true);
                        validator[publicKey].errors[ruleKey] = result[ruleKey];
                    }
                }
            };
            for (var _i = 0, _a = Object.keys(schema.$rules); _i < _a.length; _i++) {
                var ruleKey = _a[_i];
                _loop_1(ruleKey);
            }
            var nestedResult = {};
            for (var _b = 0, _c = Object.keys(validator).filter(function (key) { return key !== publicKey && key !== privateKey; }); _b < _c.length; _b++) {
                var key = _c[_b];
                nestedResult[key] = validator[key][publicKey].validate();
            }
            return Promise.all(Object.values(result[rulesResultKey]))
                .then(function () { return Promise.all(Object.values(nestedResult)); })
                .then(function () { return undefined; });
        };
        var $reset = function () {
            validator[privateKey].setValidated(false);
            validator[privateKey].setInvalid(false);
            validator[privateKey].setDirty(false);
            validator[privateKey].resetPending();
            validator[privateKey].previousResult = {};
            validator[publicKey].errors = {};
            for (var _i = 0, _a = Object.keys(validator).filter(function (key) { return key !== publicKey && key !== privateKey; }); _i < _a.length; _i++) {
                var key = _a[_i];
                validator[key][publicKey].reset();
            }
        };
        var $touch = function () {
            validator[privateKey].setDirty(true);
            for (var _i = 0, _a = Object.keys(validator).filter(function (key) { return key !== publicKey && key !== privateKey; }); _i < _a.length; _i++) {
                var key = _a[_i];
                validator[key][publicKey].touch();
            }
        };
        validator[publicKey].validate = $validate;
        validator[publicKey].reset = $reset;
        validator[publicKey].touch = $touch;
    };

    exports.proxy = proxy;

}(this.FormValidation = this.FormValidation || {}));
