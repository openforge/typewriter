var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var NAMESPACE = 'typewriter';
var queuePending = false;
var win = typeof window !== 'undefined' ? window : {};
var CSS = win.CSS;
var doc = win.document || { head: {} };
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var promiseResolve = function (v) { return Promise.resolve(v); };
var HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
var createTime = function (fnName, tagName) {
    if (tagName === void 0) { tagName = ''; }
    {
        return function () {
            return;
        };
    }
};
var uniqueTime = function (key, measureText) {
    {
        return function () {
            return;
        };
    }
};
var isComplexType = function (o) {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
var getDynamicImportFunction = function (namespace) { return "__sc_import_" + namespace.replace(/\s|-/g, '_'); };
var getElement = function (ref) { return (getHostRef(ref).$hostElement$); };
var emitEvent = function (elm, name, opts) {
    var ev = new (CustomEvent)(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
var attachToAncestor = function (hostRef, ancestorComponent) {
    if (ancestorComponent && !hostRef.$onRenderResolve$) {
        ancestorComponent['s-p'].push(new Promise(function (r) { return (hostRef.$onRenderResolve$ = r); }));
    }
};
var scheduleUpdate = function (hostRef, isInitialLoad) {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    var endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    var ancestorComponent = hostRef.$ancestorComponent$;
    var update = function () { return updateComponent(hostRef); };
    attachToAncestor(hostRef, ancestorComponent);
    var promise;
    endSchedule();
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (hostRef, instance, isInitialLoad) {
    // updateComponent
    var elm = hostRef.$hostElement$;
    var endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    var rc = elm['s-rc'];
    var endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    if (plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map(function (cb) { return cb(); });
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        var childrenPromises = elm['s-p'];
        var postUpdate = function () { return postUpdateComponent(hostRef); };
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
var postUpdateComponent = function (hostRef) {
    var tagName = hostRef.$cmpMeta$.$tagName$;
    var elm = hostRef.$hostElement$;
    var endPostUpdate = createTime('postUpdate', tagName);
    var instance = hostRef.$lazyInstance$;
    var ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(function () { return scheduleUpdate(hostRef); });
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
var forceUpdate = function (ref) {
    {
        var hostRef = getHostRef(ref);
        var isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
            scheduleUpdate(hostRef);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
var appDidLoad = function (who) {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(function () { return emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }); });
};
var safeCall = function (instance, method, arg) {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var addHydratedFlag = function (elm) { return (elm.classList.add('hydrated')); };
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    var instance = hostRef.$lazyInstance$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if ((!(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && newVal !== oldVal) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.map(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if ((memberFlags & 31 /* Prop */ || ((flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                    var propName = attrNameToPropName_1.get(attrName);
                    _this[propName] = newValue === null && typeof _this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(void 0, void 0, void 0, function () {
    var endLoad, endNewInstance, ancestorComponent, schedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 3];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta);
                if (!Cstr.then) return [3 /*break*/, 2];
                endLoad = uniqueTime();
                return [4 /*yield*/, Cstr];
            case 1:
                Cstr = _a.sent();
                endLoad();
                _a.label = 2;
            case 2:
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                {
                    hostRef.$flags$ |= 128 /* isWatchReady */;
                }
                endNewInstance();
                _a.label = 3;
            case 3:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(hostRef); };
                if (ancestorComponent && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var connectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        var cmpMeta = hostRef.$cmpMeta$;
        var endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        endConnected();
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var endBootstrap = createTime();
    var cmpTags = [];
    var exclude = options.exclude || [];
    var customElements = win.customElements;
    var head = doc.head;
    var metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    var deferredConnectedCallbacks = [];
    var appLoadFallback;
    var isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map(function (lazyBundle) { return lazyBundle[1].map(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$members$ = compactMeta[2];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(HostElement, _super);
            // StencilLazyHost
            function HostElement(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                registerHost(self, cmpMeta);
                return _this;
            }
            HostElement.prototype.connectedCallback = function () {
                var _this = this;
                if (appLoadFallback) {
                    clearTimeout(appLoadFallback);
                    appLoadFallback = null;
                }
                if (isBootstrapping) {
                    // connectedCallback will be processed once all components have been registered
                    deferredConnectedCallbacks.push(this);
                }
                else {
                    plt.jmp(function () { return connectedCallback(_this); });
                }
            };
            HostElement.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            HostElement.prototype.forceUpdate = function () {
                forceUpdate(this);
            };
            HostElement.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return HostElement;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map(function (host) { return host.connectedCallback(); });
    }
    else {
        {
            plt.jmp(function () { return (appLoadFallback = setTimeout(appDidLoad, 30)); });
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef); };
var registerHost = function (elm, cmpMeta) {
    var hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onReadyPromise$ = new Promise(function (r) { return (hostRef.$onReadyResolve$ = r); });
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    return hostRefs.set(elm, hostRef);
};
var consoleError = function (e) { return console.error(e); };
var cmpModules = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = (cmpMeta.$lazyBundleIds$);
    var module = cmpModules.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    /* webpackChunkName: "stencil-[request]" */
    "./" + bundleId + ".entry.js" + '').then(function (importedModule) {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var flush = function () {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return promiseResolve().then(cb); };
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
var patchEsm = function () {
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "stencil-polyfills-css-shim" */ './css-shim-d61c58a9.js').then(function () {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};
var patchBrowser = function () {
    {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    // @ts-ignore
    var scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return new RegExp("/" + NAMESPACE + "(\\.esm)?\\.js($|\\?|#)").test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE; });
    var opts = scriptElm['data-opts'] || {};
    if ('onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then: function () {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "stencil-polyfills-dom" */ './dom-e7fe74ef.js').then(function () { return opts; });
        }
    }
    return promiseResolve(opts);
};
var patchDynamicImport = function (base, orgScriptElm) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', "return import(w);//" + Math.random());
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.crossOrigin = orgScriptElm.crossOrigin;
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
export { patchEsm as a, bootstrapLazy as b, getElement as g, patchBrowser as p, registerInstance as r };
