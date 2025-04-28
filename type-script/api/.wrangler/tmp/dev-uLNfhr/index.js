var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/unenv/dist/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(PerformanceEntry, "PerformanceEntry");
    PerformanceMark = /* @__PURE__ */ __name(class PerformanceMark2 extends PerformanceEntry {
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    }, "PerformanceMark");
    PerformanceMeasure = class extends PerformanceEntry {
      entryType = "measure";
    };
    __name(PerformanceMeasure, "PerformanceMeasure");
    PerformanceResourceTiming = class extends PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(PerformanceResourceTiming, "PerformanceResourceTiming");
    PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(PerformanceObserverEntryList, "PerformanceObserverEntryList");
    Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e2) => e2.name !== markName) : this._entries.filter((e2) => e2.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e2) => e2.name !== measureName) : this._entries.filter((e2) => e2.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e2) => e2.entryType !== "resource" || e2.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e2) => e2.name === name && (!type || e2.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e2) => e2.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    __name(Performance, "Performance");
    PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    __name(PerformanceObserver, "PerformanceObserver");
    __publicField(PerformanceObserver, "supportedEntryTypes", []);
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
import { Socket } from "node:net";
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class extends Socket {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      isRaw = false;
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
      isTTY = false;
    };
    __name(ReadStream, "ReadStream");
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class extends Socket2 {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x2, y2, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      columns = 80;
      rows = 24;
      isTTY = false;
    };
    __name(WriteStream, "WriteStream");
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    Process = class extends EventEmitter {
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: () => 0 });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    __name(Process, "Process");
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/obliterator/iterator.js
var require_iterator = __commonJS({
  "node_modules/obliterator/iterator.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function Iterator2(next) {
      Object.defineProperty(this, "_next", {
        writable: false,
        enumerable: false,
        value: next
      });
      this.done = false;
    }
    __name(Iterator2, "Iterator");
    Iterator2.prototype.next = function() {
      if (this.done)
        return { done: true };
      var step = this._next();
      if (step.done)
        this.done = true;
      return step;
    };
    if (typeof Symbol !== "undefined")
      Iterator2.prototype[Symbol.iterator] = function() {
        return this;
      };
    Iterator2.of = function() {
      var args = arguments, l2 = args.length, i2 = 0;
      return new Iterator2(function() {
        if (i2 >= l2)
          return { done: true };
        return { done: false, value: args[i2++] };
      });
    };
    Iterator2.empty = function() {
      var iterator = new Iterator2(null);
      iterator.done = true;
      return iterator;
    };
    Iterator2.is = function(value) {
      if (value instanceof Iterator2)
        return true;
      return typeof value === "object" && value !== null && typeof value.next === "function";
    };
    module.exports = Iterator2;
  }
});

// node_modules/obliterator/foreach.js
var require_foreach = __commonJS({
  "node_modules/obliterator/foreach.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
    var SYMBOL_SUPPORT = typeof Symbol !== "undefined";
    function forEach(iterable, callback) {
      var iterator, k2, i2, l2, s2;
      if (!iterable)
        throw new Error("obliterator/forEach: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i2 = 0, l2 = iterable.length; i2 < l2; i2++)
          callback(iterable[i2], i2);
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i2 = 0;
        while (s2 = iterator.next(), s2.done !== true) {
          callback(s2.value, i2);
          i2++;
        }
        return;
      }
      for (k2 in iterable) {
        if (iterable.hasOwnProperty(k2)) {
          callback(iterable[k2], k2);
        }
      }
      return;
    }
    __name(forEach, "forEach");
    forEach.forEachWithNullKeys = function(iterable, callback) {
      var iterator, k2, i2, l2, s2;
      if (!iterable)
        throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");
      if (typeof callback !== "function")
        throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");
      if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
        for (i2 = 0, l2 = iterable.length; i2 < l2; i2++)
          callback(iterable[i2], null);
        return;
      }
      if (iterable instanceof Set) {
        iterable.forEach(function(value) {
          callback(value, null);
        });
        return;
      }
      if (typeof iterable.forEach === "function") {
        iterable.forEach(callback);
        return;
      }
      if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
        iterable = iterable[Symbol.iterator]();
      }
      if (typeof iterable.next === "function") {
        iterator = iterable;
        i2 = 0;
        while (s2 = iterator.next(), s2.done !== true) {
          callback(s2.value, null);
          i2++;
        }
        return;
      }
      for (k2 in iterable) {
        if (iterable.hasOwnProperty(k2)) {
          callback(iterable[k2], k2);
        }
      }
      return;
    };
    module.exports = forEach;
  }
});

// node_modules/mnemonist/utils/typed-arrays.js
var require_typed_arrays = __commonJS({
  "node_modules/mnemonist/utils/typed-arrays.js"(exports) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
    var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
    var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
    var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
    var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
    var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
    exports.getPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_8BIT_INTEGER)
        return Uint8Array;
      if (maxIndex <= MAX_16BIT_INTEGER)
        return Uint16Array;
      if (maxIndex <= MAX_32BIT_INTEGER)
        return Uint32Array;
      return Float64Array;
    };
    exports.getSignedPointerArray = function(size) {
      var maxIndex = size - 1;
      if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
        return Int8Array;
      if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
        return Int16Array;
      if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
        return Int32Array;
      return Float64Array;
    };
    exports.getNumberType = function(value) {
      if (value === (value | 0)) {
        if (Math.sign(value) === -1) {
          if (value <= 127 && value >= -128)
            return Int8Array;
          if (value <= 32767 && value >= -32768)
            return Int16Array;
          return Int32Array;
        } else {
          if (value <= 255)
            return Uint8Array;
          if (value <= 65535)
            return Uint16Array;
          return Uint32Array;
        }
      }
      return Float64Array;
    };
    var TYPE_PRIORITY = {
      Uint8Array: 1,
      Int8Array: 2,
      Uint16Array: 3,
      Int16Array: 4,
      Uint32Array: 5,
      Int32Array: 6,
      Float32Array: 7,
      Float64Array: 8
    };
    exports.getMinimalRepresentation = function(array, getter) {
      var maxType = null, maxPriority = 0, p2, t2, v2, i2, l2;
      for (i2 = 0, l2 = array.length; i2 < l2; i2++) {
        v2 = getter ? getter(array[i2]) : array[i2];
        t2 = exports.getNumberType(v2);
        p2 = TYPE_PRIORITY[t2.name];
        if (p2 > maxPriority) {
          maxPriority = p2;
          maxType = t2;
        }
      }
      return maxType;
    };
    exports.isTypedArray = function(value) {
      return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
    };
    exports.concat = function() {
      var length = 0, i2, o2, l2;
      for (i2 = 0, l2 = arguments.length; i2 < l2; i2++)
        length += arguments[i2].length;
      var array = new arguments[0].constructor(length);
      for (i2 = 0, o2 = 0; i2 < l2; i2++) {
        array.set(arguments[i2], o2);
        o2 += arguments[i2].length;
      }
      return array;
    };
    exports.indices = function(length) {
      var PointerArray = exports.getPointerArray(length);
      var array = new PointerArray(length);
      for (var i2 = 0; i2 < length; i2++)
        array[i2] = i2;
      return array;
    };
  }
});

// node_modules/mnemonist/utils/iterables.js
var require_iterables = __commonJS({
  "node_modules/mnemonist/utils/iterables.js"(exports) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    function isArrayLike(target) {
      return Array.isArray(target) || typed.isTypedArray(target);
    }
    __name(isArrayLike, "isArrayLike");
    function guessLength(target) {
      if (typeof target.length === "number")
        return target.length;
      if (typeof target.size === "number")
        return target.size;
      return;
    }
    __name(guessLength, "guessLength");
    function toArray(target) {
      var l2 = guessLength(target);
      var array = typeof l2 === "number" ? new Array(l2) : [];
      var i2 = 0;
      forEach(target, function(value) {
        array[i2++] = value;
      });
      return array;
    }
    __name(toArray, "toArray");
    function toArrayWithIndices(target) {
      var l2 = guessLength(target);
      var IndexArray = typeof l2 === "number" ? typed.getPointerArray(l2) : Array;
      var array = typeof l2 === "number" ? new Array(l2) : [];
      var indices = typeof l2 === "number" ? new IndexArray(l2) : [];
      var i2 = 0;
      forEach(target, function(value) {
        array[i2] = value;
        indices[i2] = i2++;
      });
      return [array, indices];
    }
    __name(toArrayWithIndices, "toArrayWithIndices");
    exports.isArrayLike = isArrayLike;
    exports.guessLength = guessLength;
    exports.toArray = toArray;
    exports.toArrayWithIndices = toArrayWithIndices;
  }
});

// node_modules/mnemonist/lru-cache.js
var require_lru_cache = __commonJS({
  "node_modules/mnemonist/lru-cache.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Iterator2 = require_iterator();
    var forEach = require_foreach();
    var typed = require_typed_arrays();
    var iterables = require_iterables();
    function LRUCache2(Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      this.capacity = capacity;
      if (typeof this.capacity !== "number" || this.capacity <= 0)
        throw new Error("mnemonist/lru-cache: capacity should be positive number.");
      var PointerArray = typed.getPointerArray(capacity);
      this.forward = new PointerArray(capacity);
      this.backward = new PointerArray(capacity);
      this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
      this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    }
    __name(LRUCache2, "LRUCache");
    LRUCache2.prototype.clear = function() {
      this.size = 0;
      this.head = 0;
      this.tail = 0;
      this.items = {};
    };
    LRUCache2.prototype.splayOnTop = function(pointer) {
      var oldHead = this.head;
      if (this.head === pointer)
        return this;
      var previous = this.backward[pointer], next = this.forward[pointer];
      if (this.tail === pointer) {
        this.tail = previous;
      } else {
        this.backward[next] = previous;
      }
      this.forward[previous] = next;
      this.backward[oldHead] = pointer;
      this.head = pointer;
      this.forward[pointer] = oldHead;
      return this;
    };
    LRUCache2.prototype.set = function(key, value) {
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        this.V[pointer] = value;
        return;
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
    };
    LRUCache2.prototype.setpop = function(key, value) {
      var oldValue = null;
      var oldKey = null;
      var pointer = this.items[key];
      if (typeof pointer !== "undefined") {
        this.splayOnTop(pointer);
        oldValue = this.V[pointer];
        this.V[pointer] = value;
        return { evicted: false, key, value: oldValue };
      }
      if (this.size < this.capacity) {
        pointer = this.size++;
      } else {
        pointer = this.tail;
        this.tail = this.backward[pointer];
        oldValue = this.V[pointer];
        oldKey = this.K[pointer];
        delete this.items[this.K[pointer]];
      }
      this.items[key] = pointer;
      this.K[pointer] = key;
      this.V[pointer] = value;
      this.forward[pointer] = this.head;
      this.backward[this.head] = pointer;
      this.head = pointer;
      if (oldKey) {
        return { evicted: true, key: oldKey, value: oldValue };
      } else {
        return null;
      }
    };
    LRUCache2.prototype.has = function(key) {
      return key in this.items;
    };
    LRUCache2.prototype.get = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      this.splayOnTop(pointer);
      return this.V[pointer];
    };
    LRUCache2.prototype.peek = function(key) {
      var pointer = this.items[key];
      if (typeof pointer === "undefined")
        return;
      return this.V[pointer];
    };
    LRUCache2.prototype.forEach = function(callback, scope) {
      scope = arguments.length > 1 ? scope : this;
      var i2 = 0, l2 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      while (i2 < l2) {
        callback.call(scope, values[pointer], keys[pointer], this);
        pointer = forward[pointer];
        i2++;
      }
    };
    LRUCache2.prototype.keys = function() {
      var i2 = 0, l2 = this.size;
      var pointer = this.head, keys = this.K, forward = this.forward;
      return new Iterator2(function() {
        if (i2 >= l2)
          return { done: true };
        var key = keys[pointer];
        i2++;
        if (i2 < l2)
          pointer = forward[pointer];
        return {
          done: false,
          value: key
        };
      });
    };
    LRUCache2.prototype.values = function() {
      var i2 = 0, l2 = this.size;
      var pointer = this.head, values = this.V, forward = this.forward;
      return new Iterator2(function() {
        if (i2 >= l2)
          return { done: true };
        var value = values[pointer];
        i2++;
        if (i2 < l2)
          pointer = forward[pointer];
        return {
          done: false,
          value
        };
      });
    };
    LRUCache2.prototype.entries = function() {
      var i2 = 0, l2 = this.size;
      var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
      return new Iterator2(function() {
        if (i2 >= l2)
          return { done: true };
        var key = keys[pointer], value = values[pointer];
        i2++;
        if (i2 < l2)
          pointer = forward[pointer];
        return {
          done: false,
          value: [key, value]
        };
      });
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.iterator] = LRUCache2.prototype.entries;
    LRUCache2.prototype.inspect = function() {
      var proxy = /* @__PURE__ */ new Map();
      var iterator = this.entries(), step;
      while (step = iterator.next(), !step.done)
        proxy.set(step.value[0], step.value[1]);
      Object.defineProperty(proxy, "constructor", {
        value: LRUCache2,
        enumerable: false
      });
      return proxy;
    };
    if (typeof Symbol !== "undefined")
      LRUCache2.prototype[Symbol.for("nodejs.util.inspect.custom")] = LRUCache2.prototype.inspect;
    LRUCache2.from = function(iterable, Keys, Values, capacity) {
      if (arguments.length < 2) {
        capacity = iterables.guessLength(iterable);
        if (typeof capacity !== "number")
          throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else if (arguments.length === 2) {
        capacity = Keys;
        Keys = null;
        Values = null;
      }
      var cache2 = new LRUCache2(Keys, Values, capacity);
      forEach(iterable, function(value, key) {
        cache2.set(key, value);
      });
      return cache2;
    };
    module.exports = LRUCache2;
  }
});

// node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "node_modules/bowser/es5.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    !function(e2, t2) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define([], t2) : "object" == typeof exports ? exports.bowser = t2() : e2.bowser = t2();
    }(exports, function() {
      return function(e2) {
        var t2 = {};
        function r2(n2) {
          if (t2[n2])
            return t2[n2].exports;
          var i2 = t2[n2] = { i: n2, l: false, exports: {} };
          return e2[n2].call(i2.exports, i2, i2.exports, r2), i2.l = true, i2.exports;
        }
        __name(r2, "r");
        return r2.m = e2, r2.c = t2, r2.d = function(e3, t3, n2) {
          r2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: n2 });
        }, r2.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, r2.t = function(e3, t3) {
          if (1 & t3 && (e3 = r2(e3)), 8 & t3)
            return e3;
          if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule)
            return e3;
          var n2 = /* @__PURE__ */ Object.create(null);
          if (r2.r(n2), Object.defineProperty(n2, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3)
            for (var i2 in e3)
              r2.d(n2, i2, function(t4) {
                return e3[t4];
              }.bind(null, i2));
          return n2;
        }, r2.n = function(e3) {
          var t3 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return r2.d(t3, "a", t3), t3;
        }, r2.o = function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, r2.p = "", r2(r2.s = 90);
      }({ 17: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2 = r2(18), i2 = function() {
          function e3() {
          }
          __name(e3, "e");
          return e3.getFirstMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 0 && r3[1] || "";
          }, e3.getSecondMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 1 && r3[2] || "";
          }, e3.matchAndReturnConst = function(e4, t3, r3) {
            if (e4.test(t3))
              return r3;
          }, e3.getWindowsVersionName = function(e4) {
            switch (e4) {
              case "NT":
                return "NT";
              case "XP":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.1":
                return "XP";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          }, e3.getMacOSVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map(function(e5) {
              return parseInt(e5, 10) || 0;
            });
            if (t3.push(0), 10 === t3[0])
              switch (t3[1]) {
                case 5:
                  return "Leopard";
                case 6:
                  return "Snow Leopard";
                case 7:
                  return "Lion";
                case 8:
                  return "Mountain Lion";
                case 9:
                  return "Mavericks";
                case 10:
                  return "Yosemite";
                case 11:
                  return "El Capitan";
                case 12:
                  return "Sierra";
                case 13:
                  return "High Sierra";
                case 14:
                  return "Mojave";
                case 15:
                  return "Catalina";
                default:
                  return;
              }
          }, e3.getAndroidVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map(function(e5) {
              return parseInt(e5, 10) || 0;
            });
            if (t3.push(0), !(1 === t3[0] && t3[1] < 5))
              return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
          }, e3.getVersionPrecision = function(e4) {
            return e4.split(".").length;
          }, e3.compareVersions = function(t3, r3, n3) {
            void 0 === n3 && (n3 = false);
            var i3 = e3.getVersionPrecision(t3), s2 = e3.getVersionPrecision(r3), a2 = Math.max(i3, s2), o2 = 0, u2 = e3.map([t3, r3], function(t4) {
              var r4 = a2 - e3.getVersionPrecision(t4), n4 = t4 + new Array(r4 + 1).join(".0");
              return e3.map(n4.split("."), function(e4) {
                return new Array(20 - e4.length).join("0") + e4;
              }).reverse();
            });
            for (n3 && (o2 = a2 - Math.min(i3, s2)), a2 -= 1; a2 >= o2; ) {
              if (u2[0][a2] > u2[1][a2])
                return 1;
              if (u2[0][a2] === u2[1][a2]) {
                if (a2 === o2)
                  return 0;
                a2 -= 1;
              } else if (u2[0][a2] < u2[1][a2])
                return -1;
            }
          }, e3.map = function(e4, t3) {
            var r3, n3 = [];
            if (Array.prototype.map)
              return Array.prototype.map.call(e4, t3);
            for (r3 = 0; r3 < e4.length; r3 += 1)
              n3.push(t3(e4[r3]));
            return n3;
          }, e3.find = function(e4, t3) {
            var r3, n3;
            if (Array.prototype.find)
              return Array.prototype.find.call(e4, t3);
            for (r3 = 0, n3 = e4.length; r3 < n3; r3 += 1) {
              var i3 = e4[r3];
              if (t3(i3, r3))
                return i3;
            }
          }, e3.assign = function(e4) {
            for (var t3, r3, n3 = e4, i3 = arguments.length, s2 = new Array(i3 > 1 ? i3 - 1 : 0), a2 = 1; a2 < i3; a2++)
              s2[a2 - 1] = arguments[a2];
            if (Object.assign)
              return Object.assign.apply(Object, [e4].concat(s2));
            var o2 = /* @__PURE__ */ __name(function() {
              var e5 = s2[t3];
              "object" == typeof e5 && null !== e5 && Object.keys(e5).forEach(function(t4) {
                n3[t4] = e5[t4];
              });
            }, "o");
            for (t3 = 0, r3 = s2.length; t3 < r3; t3 += 1)
              o2();
            return e4;
          }, e3.getBrowserAlias = function(e4) {
            return n2.BROWSER_ALIASES_MAP[e4];
          }, e3.getBrowserTypeByAlias = function(e4) {
            return n2.BROWSER_MAP[e4] || "";
          }, e3;
        }();
        t2.default = i2, e2.exports = t2.default;
      }, 18: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0;
        t2.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
        t2.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
        t2.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
        t2.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
        t2.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
      }, 90: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(91)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        function a2(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n3 = t3[r3];
            n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, n3.key, n3);
          }
        }
        __name(a2, "a");
        var o2 = function() {
          function e3() {
          }
          __name(e3, "e");
          var t3, r3, n3;
          return e3.getParser = function(e4, t4) {
            if (void 0 === t4 && (t4 = false), "string" != typeof e4)
              throw new Error("UserAgent should be a string");
            return new i2.default(e4, t4);
          }, e3.parse = function(e4) {
            return new i2.default(e4).getResult();
          }, t3 = e3, n3 = [{ key: "BROWSER_MAP", get: function() {
            return s2.BROWSER_MAP;
          } }, { key: "ENGINE_MAP", get: function() {
            return s2.ENGINE_MAP;
          } }, { key: "OS_MAP", get: function() {
            return s2.OS_MAP;
          } }, { key: "PLATFORMS_MAP", get: function() {
            return s2.PLATFORMS_MAP;
          } }], (r3 = null) && a2(t3.prototype, r3), n3 && a2(t3, n3), e3;
        }();
        t2.default = o2, e2.exports = t2.default;
      }, 91: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2 = u2(r2(92)), i2 = u2(r2(93)), s2 = u2(r2(94)), a2 = u2(r2(95)), o2 = u2(r2(17));
        function u2(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }
        __name(u2, "u");
        var d2 = function() {
          function e3(e4, t4) {
            if (void 0 === t4 && (t4 = false), null == e4 || "" === e4)
              throw new Error("UserAgent parameter can't be empty");
            this._ua = e4, this.parsedResult = {}, true !== t4 && this.parse();
          }
          __name(e3, "e");
          var t3 = e3.prototype;
          return t3.getUA = function() {
            return this._ua;
          }, t3.test = function(e4) {
            return e4.test(this._ua);
          }, t3.parseBrowser = function() {
            var e4 = this;
            this.parsedResult.browser = {};
            var t4 = o2.default.find(n2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
          }, t3.getBrowser = function() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }, t3.getBrowserName = function(e4) {
            return e4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
          }, t3.getBrowserVersion = function() {
            return this.getBrowser().version;
          }, t3.getOS = function() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }, t3.parseOS = function() {
            var e4 = this;
            this.parsedResult.os = {};
            var t4 = o2.default.find(i2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
          }, t3.getOSName = function(e4) {
            var t4 = this.getOS().name;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.getOSVersion = function() {
            return this.getOS().version;
          }, t3.getPlatform = function() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }, t3.getPlatformType = function(e4) {
            void 0 === e4 && (e4 = false);
            var t4 = this.getPlatform().type;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.parsePlatform = function() {
            var e4 = this;
            this.parsedResult.platform = {};
            var t4 = o2.default.find(s2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
          }, t3.getEngine = function() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }, t3.getEngineName = function(e4) {
            return e4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
          }, t3.parseEngine = function() {
            var e4 = this;
            this.parsedResult.engine = {};
            var t4 = o2.default.find(a2.default, function(t5) {
              if ("function" == typeof t5.test)
                return t5.test(e4);
              if (t5.test instanceof Array)
                return t5.test.some(function(t6) {
                  return e4.test(t6);
                });
              throw new Error("Browser's test function is not valid");
            });
            return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
          }, t3.parse = function() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
          }, t3.getResult = function() {
            return o2.default.assign({}, this.parsedResult);
          }, t3.satisfies = function(e4) {
            var t4 = this, r3 = {}, n3 = 0, i3 = {}, s3 = 0;
            if (Object.keys(e4).forEach(function(t5) {
              var a4 = e4[t5];
              "string" == typeof a4 ? (i3[t5] = a4, s3 += 1) : "object" == typeof a4 && (r3[t5] = a4, n3 += 1);
            }), n3 > 0) {
              var a3 = Object.keys(r3), u3 = o2.default.find(a3, function(e5) {
                return t4.isOS(e5);
              });
              if (u3) {
                var d3 = this.satisfies(r3[u3]);
                if (void 0 !== d3)
                  return d3;
              }
              var c2 = o2.default.find(a3, function(e5) {
                return t4.isPlatform(e5);
              });
              if (c2) {
                var f2 = this.satisfies(r3[c2]);
                if (void 0 !== f2)
                  return f2;
              }
            }
            if (s3 > 0) {
              var l2 = Object.keys(i3), h2 = o2.default.find(l2, function(e5) {
                return t4.isBrowser(e5, true);
              });
              if (void 0 !== h2)
                return this.compareVersion(i3[h2]);
            }
          }, t3.isBrowser = function(e4, t4) {
            void 0 === t4 && (t4 = false);
            var r3 = this.getBrowserName().toLowerCase(), n3 = e4.toLowerCase(), i3 = o2.default.getBrowserTypeByAlias(n3);
            return t4 && i3 && (n3 = i3.toLowerCase()), n3 === r3;
          }, t3.compareVersion = function(e4) {
            var t4 = [0], r3 = e4, n3 = false, i3 = this.getBrowserVersion();
            if ("string" == typeof i3)
              return ">" === e4[0] || "<" === e4[0] ? (r3 = e4.substr(1), "=" === e4[1] ? (n3 = true, r3 = e4.substr(2)) : t4 = [], ">" === e4[0] ? t4.push(1) : t4.push(-1)) : "=" === e4[0] ? r3 = e4.substr(1) : "~" === e4[0] && (n3 = true, r3 = e4.substr(1)), t4.indexOf(o2.default.compareVersions(i3, r3, n3)) > -1;
          }, t3.isOS = function(e4) {
            return this.getOSName(true) === String(e4).toLowerCase();
          }, t3.isPlatform = function(e4) {
            return this.getPlatformType(true) === String(e4).toLowerCase();
          }, t3.isEngine = function(e4) {
            return this.getEngineName(true) === String(e4).toLowerCase();
          }, t3.is = function(e4, t4) {
            return void 0 === t4 && (t4 = false), this.isBrowser(e4, t4) || this.isOS(e4) || this.isPlatform(e4);
          }, t3.some = function(e4) {
            var t4 = this;
            return void 0 === e4 && (e4 = []), e4.some(function(e5) {
              return t4.is(e5);
            });
          }, e3;
        }();
        t2.default = d2, e2.exports = t2.default;
      }, 92: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 };
        var s2 = /version\/(\d+(\.?_?\d+)+)/i, a2 = [{ test: [/googlebot/i], describe: function(e3) {
          var t3 = { name: "Googlebot" }, r3 = i2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opera/i], describe: function(e3) {
          var t3 = { name: "Opera" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opr\/|opios/i], describe: function(e3) {
          var t3 = { name: "Opera" }, r3 = i2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/SamsungBrowser/i], describe: function(e3) {
          var t3 = { name: "Samsung Internet for Android" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/Whale/i], describe: function(e3) {
          var t3 = { name: "NAVER Whale Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/MZBrowser/i], describe: function(e3) {
          var t3 = { name: "MZ Browser" }, r3 = i2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/focus/i], describe: function(e3) {
          var t3 = { name: "Focus" }, r3 = i2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/swing/i], describe: function(e3) {
          var t3 = { name: "Swing" }, r3 = i2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/coast/i], describe: function(e3) {
          var t3 = { name: "Opera Coast" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e3) {
          var t3 = { name: "Opera Touch" }, r3 = i2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/yabrowser/i], describe: function(e3) {
          var t3 = { name: "Yandex Browser" }, r3 = i2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/ucbrowser/i], describe: function(e3) {
          var t3 = { name: "UC Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/Maxthon|mxios/i], describe: function(e3) {
          var t3 = { name: "Maxthon" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/epiphany/i], describe: function(e3) {
          var t3 = { name: "Epiphany" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/puffin/i], describe: function(e3) {
          var t3 = { name: "Puffin" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/sleipnir/i], describe: function(e3) {
          var t3 = { name: "Sleipnir" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/k-meleon/i], describe: function(e3) {
          var t3 = { name: "K-Meleon" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/micromessenger/i], describe: function(e3) {
          var t3 = { name: "WeChat" }, r3 = i2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/qqbrowser/i], describe: function(e3) {
          var t3 = { name: /qqbrowserlite/i.test(e3) ? "QQ Browser Lite" : "QQ Browser" }, r3 = i2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/msie|trident/i], describe: function(e3) {
          var t3 = { name: "Internet Explorer" }, r3 = i2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/\sedg\//i], describe: function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = i2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/edg([ea]|ios)/i], describe: function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = i2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/vivaldi/i], describe: function(e3) {
          var t3 = { name: "Vivaldi" }, r3 = i2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/seamonkey/i], describe: function(e3) {
          var t3 = { name: "SeaMonkey" }, r3 = i2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/sailfish/i], describe: function(e3) {
          var t3 = { name: "Sailfish" }, r3 = i2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/silk/i], describe: function(e3) {
          var t3 = { name: "Amazon Silk" }, r3 = i2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/phantom/i], describe: function(e3) {
          var t3 = { name: "PhantomJS" }, r3 = i2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/slimerjs/i], describe: function(e3) {
          var t3 = { name: "SlimerJS" }, r3 = i2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
          var t3 = { name: "BlackBerry" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
          var t3 = { name: "WebOS Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/bada/i], describe: function(e3) {
          var t3 = { name: "Bada" }, r3 = i2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/tizen/i], describe: function(e3) {
          var t3 = { name: "Tizen" }, r3 = i2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/qupzilla/i], describe: function(e3) {
          var t3 = { name: "QupZilla" }, r3 = i2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e3) {
          var t3 = { name: "Firefox" }, r3 = i2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/electron/i], describe: function(e3) {
          var t3 = { name: "Electron" }, r3 = i2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/MiuiBrowser/i], describe: function(e3) {
          var t3 = { name: "Miui" }, r3 = i2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/chromium/i], describe: function(e3) {
          var t3 = { name: "Chromium" }, r3 = i2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/chrome|crios|crmo/i], describe: function(e3) {
          var t3 = { name: "Chrome" }, r3 = i2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/GSA/i], describe: function(e3) {
          var t3 = { name: "Google Search" }, r3 = i2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, describe: function(e3) {
          var t3 = { name: "Android Browser" }, r3 = i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/playstation 4/i], describe: function(e3) {
          var t3 = { name: "PlayStation 4" }, r3 = i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/safari|applewebkit/i], describe: function(e3) {
          var t3 = { name: "Safari" }, r3 = i2.default.getFirstMatch(s2, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/.*/i], describe: function(e3) {
          var t3 = -1 !== e3.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
          return { name: i2.default.getFirstMatch(t3, e3), version: i2.default.getSecondMatch(t3, e3) };
        } }];
        t2.default = a2, e2.exports = t2.default;
      }, 93: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        var a2 = [{ test: [/Roku\/DVP/], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e3);
          return { name: s2.OS_MAP.Roku, version: t3 };
        } }, { test: [/windows phone/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.WindowsPhone, version: t3 };
        } }, { test: [/windows /i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e3), r3 = i2.default.getWindowsVersionName(t3);
          return { name: s2.OS_MAP.Windows, version: t3, versionName: r3 };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e3) {
          var t3 = { name: s2.OS_MAP.iOS }, r3 = i2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/macintosh/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e3).replace(/[_\s]/g, "."), r3 = i2.default.getMacOSVersionName(t3), n3 = { name: s2.OS_MAP.MacOS, version: t3 };
          return r3 && (n3.versionName = r3), n3;
        } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e3).replace(/[_\s]/g, ".");
          return { name: s2.OS_MAP.iOS, version: t3 };
        } }, { test: function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e3), r3 = i2.default.getAndroidVersionName(t3), n3 = { name: s2.OS_MAP.Android, version: t3 };
          return r3 && (n3.versionName = r3), n3;
        } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e3), r3 = { name: s2.OS_MAP.WebOS };
          return t3 && t3.length && (r3.version = t3), r3;
        } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e3) || i2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e3) || i2.default.getFirstMatch(/\bbb(\d+)/i, e3);
          return { name: s2.OS_MAP.BlackBerry, version: t3 };
        } }, { test: [/bada/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.Bada, version: t3 };
        } }, { test: [/tizen/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.Tizen, version: t3 };
        } }, { test: [/linux/i], describe: function() {
          return { name: s2.OS_MAP.Linux };
        } }, { test: [/CrOS/], describe: function() {
          return { name: s2.OS_MAP.ChromeOS };
        } }, { test: [/PlayStation 4/], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e3);
          return { name: s2.OS_MAP.PlayStation4, version: t3 };
        } }];
        t2.default = a2, e2.exports = t2.default;
      }, 94: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        var a2 = [{ test: [/googlebot/i], describe: function() {
          return { type: "bot", vendor: "Google" };
        } }, { test: [/huawei/i], describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/(can-l01)/i, e3) && "Nova", r3 = { type: s2.PLATFORMS_MAP.mobile, vendor: "Huawei" };
          return t3 && (r3.model = t3), r3;
        } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Nexus" };
        } }, { test: [/ipad/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        } }, { test: [/kftt build/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
        } }, { test: [/silk/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon" };
        } }, { test: [/tablet(?! pc)/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet };
        } }, { test: function(e3) {
          var t3 = e3.test(/ipod|iphone/i), r3 = e3.test(/like (ipod|iphone)/i);
          return t3 && !r3;
        }, describe: function(e3) {
          var t3 = i2.default.getFirstMatch(/(ipod|iphone)/i, e3);
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
        } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "Nexus" };
        } }, { test: [/[^-]mobi/i], describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "blackberry" === e3.getBrowserName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
        } }, { test: function(e3) {
          return "bada" === e3.getBrowserName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "windows phone" === e3.getBrowserName();
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
        } }, { test: function(e3) {
          var t3 = Number(String(e3.getOSVersion()).split(".")[0]);
          return "android" === e3.getOSName(true) && t3 >= 3;
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.tablet };
        } }, { test: function(e3) {
          return "android" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.mobile };
        } }, { test: function(e3) {
          return "macos" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.desktop, vendor: "Apple" };
        } }, { test: function(e3) {
          return "windows" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.desktop };
        } }, { test: function(e3) {
          return "linux" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.desktop };
        } }, { test: function(e3) {
          return "playstation 4" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.tv };
        } }, { test: function(e3) {
          return "roku" === e3.getOSName(true);
        }, describe: function() {
          return { type: s2.PLATFORMS_MAP.tv };
        } }];
        t2.default = a2, e2.exports = t2.default;
      }, 95: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
        var a2 = [{ test: function(e3) {
          return "microsoft edge" === e3.getBrowserName(true);
        }, describe: function(e3) {
          if (/\sedg\//i.test(e3))
            return { name: s2.ENGINE_MAP.Blink };
          var t3 = i2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e3);
          return { name: s2.ENGINE_MAP.EdgeHTML, version: t3 };
        } }, { test: [/trident/i], describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.Trident }, r3 = i2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          return e3.test(/presto/i);
        }, describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.Presto }, r3 = i2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: function(e3) {
          var t3 = e3.test(/gecko/i), r3 = e3.test(/like gecko/i);
          return t3 && !r3;
        }, describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.Gecko }, r3 = i2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
          return { name: s2.ENGINE_MAP.Blink };
        } }, { test: [/(apple)?webkit/i], describe: function(e3) {
          var t3 = { name: s2.ENGINE_MAP.WebKit }, r3 = i2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        } }];
        t2.default = a2, e2.exports = t2.default;
      } });
    });
  }
});

// .wrangler/tmp/bundle-X57t9V/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-X57t9V/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/account-id-endpoint/AccountIdEndpointModeConfigResolver.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-middleware/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/abort.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/auth.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpAuthLocation;
(function(HttpAuthLocation2) {
  HttpAuthLocation2["HEADER"] = "header";
  HttpAuthLocation2["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

// node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpApiKeyAuthLocation;
(function(HttpApiKeyAuthLocation2) {
  HttpApiKeyAuthLocation2["HEADER"] = "header";
  HttpApiKeyAuthLocation2["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

// node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/HttpSigner.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/checksum.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/client.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/command.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/config.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/manager.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/pool.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/crypto.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/encode.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoint.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var EndpointURLScheme;
(function(EndpointURLScheme2) {
  EndpointURLScheme2["HTTP"] = "http";
  EndpointURLScheme2["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// node_modules/@smithy/types/dist-es/endpoints/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/shared.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/eventStream.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/extensions/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/extensions/checksum.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var AlgorithmId;
(function(AlgorithmId2) {
  AlgorithmId2["MD5"] = "md5";
  AlgorithmId2["CRC32"] = "crc32";
  AlgorithmId2["CRC32C"] = "crc32c";
  AlgorithmId2["SHA1"] = "sha1";
  AlgorithmId2["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

// node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/feature-ids.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/http.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FieldPosition;
(function(FieldPosition2) {
  FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
  FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

// node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/identity.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/logger.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/middleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SMITHY_CONTEXT_KEY = "__smithy_context";

// node_modules/@smithy/types/dist-es/pagination.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/profile.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var IniSectionType;
(function(IniSectionType2) {
  IniSectionType2["PROFILE"] = "profile";
  IniSectionType2["SSO_SESSION"] = "sso-session";
  IniSectionType2["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

// node_modules/@smithy/types/dist-es/response.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/retry.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/serde.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/shapes.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/signature.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/stream.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/transfer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RequestHandlerProtocol;
(function(RequestHandlerProtocol2) {
  RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

// node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/transform/no-undefined.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/transform/type-transform.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/uri.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/util.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/waiter.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext = /* @__PURE__ */ __name((context2) => context2[SMITHY_CONTEXT_KEY] || (context2[SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var normalizeProvider = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@aws-sdk/core/dist-es/submodules/account-id-endpoint/AccountIdEndpointModeConstants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_ACCOUNT_ID_ENDPOINT_MODE = "preferred";
var ACCOUNT_ID_ENDPOINT_MODE_VALUES = ["disabled", "preferred", "required"];
function validateAccountIdEndpointMode(value) {
  return ACCOUNT_ID_ENDPOINT_MODE_VALUES.includes(value);
}
__name(validateAccountIdEndpointMode, "validateAccountIdEndpointMode");

// node_modules/@aws-sdk/core/dist-es/submodules/account-id-endpoint/AccountIdEndpointModeConfigResolver.js
var resolveAccountIdEndpointModeConfig = /* @__PURE__ */ __name((input) => {
  const { accountIdEndpointMode } = input;
  const accountIdEndpointModeProvider = normalizeProvider(accountIdEndpointMode ?? DEFAULT_ACCOUNT_ID_ENDPOINT_MODE);
  return Object.assign(input, {
    accountIdEndpointMode: async () => {
      const accIdMode = await accountIdEndpointModeProvider();
      if (!validateAccountIdEndpointMode(accIdMode)) {
        throw new Error(`Invalid value for accountIdEndpointMode: ${accIdMode}. Valid values are: "required", "preferred", "disabled".`);
      }
      return accIdMode;
    }
  });
}, "resolveAccountIdEndpointModeConfig");

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/configurations.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getEndpointDiscoveryPlugin.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/endpointDiscoveryMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/extensions/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setHttpHandler(handler) {
      runtimeConfig.httpHandler = handler;
    },
    httpHandler() {
      return runtimeConfig.httpHandler;
    },
    updateHttpClientConfig(key, value) {
      runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
    },
    httpHandlerConfigs() {
      return runtimeConfig.httpHandler.httpHandlerConfigs();
    }
  };
}, "getHttpHandlerExtensionConfiguration");
var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
  return {
    httpHandler: httpHandlerExtensionConfiguration.httpHandler()
  };
}, "resolveHttpHandlerRuntimeConfig");

// node_modules/@smithy/protocol-http/dist-es/Field.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/Fields.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/httpHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpRequest = class {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static clone(request) {
    const cloned = new HttpRequest({
      ...request,
      headers: { ...request.headers }
    });
    if (cloned.query) {
      cloned.query = cloneQuery(cloned.query);
    }
    return cloned;
  }
  static isInstance(request) {
    if (!request) {
      return false;
    }
    const req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    return HttpRequest.clone(this);
  }
};
__name(HttpRequest, "HttpRequest");
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
__name(cloneQuery, "cloneQuery");

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpResponse = class {
  constructor(options) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  static isInstance(response) {
    if (!response)
      return false;
    const resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
};
__name(HttpResponse, "HttpResponse");

// node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getCacheKey.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/updateDiscoveredEndpointInCache.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/endpoint-cache/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/endpoint-cache/dist-es/Endpoint.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_lru_cache = __toESM(require_lru_cache());
var EndpointCache = class {
  cache;
  constructor(capacity) {
    this.cache = new import_lru_cache.default(capacity);
  }
  getEndpoint(key) {
    const endpointsWithExpiry = this.get(key);
    if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
      return void 0;
    }
    const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
  }
  get(key) {
    if (!this.has(key)) {
      return;
    }
    const value = this.cache.get(key);
    if (!value) {
      return;
    }
    const now = Date.now();
    const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
    if (endpointsWithExpiry.length === 0) {
      this.delete(key);
      return void 0;
    }
    return endpointsWithExpiry;
  }
  set(key, endpoints) {
    const now = Date.now();
    this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
      Address,
      Expires: now + CachePeriodInMinutes * 60 * 1e3
    })));
  }
  delete(key) {
    this.cache.set(key, []);
  }
  has(key) {
    if (!this.cache.has(key)) {
      return false;
    }
    const endpoints = this.cache.peek(key);
    if (!endpoints) {
      return false;
    }
    return endpoints.length > 0;
  }
  clear() {
    this.cache.clear();
  }
};
__name(EndpointCache, "EndpointCache");

// node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js
var resolveEndpointDiscoveryConfig = /* @__PURE__ */ __name((input, { endpointDiscoveryCommandCtor }) => {
  const { endpointCacheSize, endpointDiscoveryEnabled, endpointDiscoveryEnabledProvider } = input;
  return Object.assign(input, {
    endpointDiscoveryCommandCtor,
    endpointCache: new EndpointCache(endpointCacheSize ?? 1e3),
    endpointDiscoveryEnabled: endpointDiscoveryEnabled !== void 0 ? () => Promise.resolve(endpointDiscoveryEnabled) : endpointDiscoveryEnabledProvider,
    isClientEndpointDiscoveryEnabled: endpointDiscoveryEnabled !== void 0
  });
}, "resolveEndpointDiscoveryConfig");

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function resolveHostHeaderConfig(input) {
  return input;
}
__name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
var hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
    delete request.headers["host"];
    request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
  } else if (!request.headers["host"]) {
    let host = request.hostname;
    if (request.port != null)
      host += `:${request.port}`;
    request.headers["host"] = host;
  }
  return next(args);
}, "hostHeaderMiddleware");
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }
}), "getHostHeaderPlugin");

// node_modules/@aws-sdk/middleware-logger/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var loggerMiddleware = /* @__PURE__ */ __name(() => (next, context2) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context2;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context2.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context2.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger2?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error3) {
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context2;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context2.inputFilterSensitiveLog;
    logger2?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error: error3,
      metadata: error3.$metadata
    });
    throw error3;
  }
}, "loggerMiddleware");
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }
}), "getLoggerPlugin");

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request) || options.runtime !== "node") {
    return next(args);
  }
  const traceIdHeader = Object.keys(request.headers ?? {}).find((h2) => h2.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ?? TRACE_ID_HEADER_NAME;
  if (request.headers.hasOwnProperty(traceIdHeader)) {
    return next(args);
  }
  const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
  const traceId = process.env[ENV_TRACE_ID];
  const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request
  });
}, "recursionDetectionMiddleware");
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};
var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  }
}), "getRecursionDetectionPlugin");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/getSmithyContext.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
__name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
var httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config2, mwOptions) => (next, context2) => async (args) => {
  const options = config2.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config2, context2, args.input));
  const authSchemes = convertHttpAuthSchemesToMap(config2.httpAuthSchemes);
  const smithyContext = getSmithyContext(context2);
  const failureReasons = [];
  for (const option of options) {
    const scheme = authSchemes.get(option.schemeId);
    if (!scheme) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config2));
    if (!identityProvider) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config2, context2) || {};
    option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
    option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
    smithyContext.selectedHttpAuthScheme = {
      httpAuthOption: option,
      identity: await identityProvider(option.identityProperties),
      signer: scheme.signer
    };
    break;
  }
  if (!smithyContext.selectedHttpAuthScheme) {
    throw new Error(failureReasons.join("\n"));
  }
  return next(args);
}, "httpAuthSchemeMiddleware");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};
var getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config2, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpAuthSchemeMiddleware(config2, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
  }
}), "getHttpAuthSchemeEndpointRuleSetPlugin");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-serde/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next, context2) => async (args) => {
  const { response } = await next(args);
  try {
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  } catch (error3) {
    Object.defineProperty(error3, "$response", {
      value: response
    });
    if (!("$metadata" in error3)) {
      const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      try {
        error3.message += "\n  " + hint;
      } catch (e2) {
        if (!context2.logger || context2.logger?.constructor?.name === "NoOpLogger") {
          console.warn(hint);
        } else {
          context2.logger?.warn?.(hint);
        }
      }
      if (typeof error3.$responseBodyText !== "undefined") {
        if (error3.$response) {
          error3.$response.body = error3.$responseBodyText;
        }
      }
    }
    throw error3;
  }
}, "deserializerMiddleware");

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context2) => async (args) => {
  const endpoint = context2.endpointV2?.url && options.urlParser ? async () => options.urlParser(context2.endpointV2.url) : options.endpoint;
  if (!endpoint) {
    throw new Error("No valid endpoint provider available.");
  }
  const request = await serializer(args.input, { ...options, endpoint });
  return next({
    ...args,
    request
  });
}, "serializerMiddleware");

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config2, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config2, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config2, serializer), serializerMiddlewareOption);
    }
  };
}
__name(getSerdePlugin, "getSerdePlugin");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error3) => {
  throw error3;
}, "defaultErrorHandler");
var defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
}, "defaultSuccessHandler");
var httpSigningMiddleware = /* @__PURE__ */ __name((config2) => (next, context2) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context2);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  const output = await next({
    ...args,
    request: await signer.sign(args.request, identity, signingProperties)
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
}, "httpSigningMiddleware");

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: "retryMiddleware"
};
var getHttpSigningPlugin = /* @__PURE__ */ __name((config2) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(config2), httpSigningMiddlewareOptions);
  }
}), "getHttpSigningPlugin");

// node_modules/@smithy/core/dist-es/normalizeProvider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var normalizeProvider2 = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@smithy/core/dist-es/pagination/createPaginator.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var makePagedClientRequest = /* @__PURE__ */ __name(async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
  let command = new CommandCtor(input);
  command = withCommand(command) ?? command;
  return await client.send(command, ...args);
}, "makePagedClientRequest");
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return /* @__PURE__ */ __name(async function* paginateOperation(config2, input, ...additionalArguments) {
    const _input = input;
    let token = config2.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config2.pageSize;
      }
      if (config2.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config2.client, input, config2.withCommand, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config2.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  }, "paginateOperation");
}
__name(createPaginator, "createPaginator");
var get = /* @__PURE__ */ __name((fromObject, path) => {
  let cursor = fromObject;
  const pathComponents = path.split(".");
  for (const step of pathComponents) {
    if (!cursor || typeof cursor !== "object") {
      return void 0;
    }
    cursor = cursor[step];
  }
  return cursor;
}, "get");

// node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-base64/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-base64/dist-es/constants.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var alphabetByEncoding = {};
var alphabetByValue = new Array(64);
for (let i2 = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i2 + start <= limit; i2++) {
  const char = String.fromCharCode(i2 + start);
  alphabetByEncoding[char] = i2;
  alphabetByValue[i2] = char;
}
for (let i2 = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i2 + start <= limit; i2++) {
  const char = String.fromCharCode(i2 + start);
  const index = i2 + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i2 = 0; i2 < 10; i2++) {
  alphabetByEncoding[i2.toString(10)] = i2 + 52;
  const char = i2.toString(10);
  const index = i2 + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;

// node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
var fromBase64 = /* @__PURE__ */ __name((input) => {
  let totalByteLength = input.length / 4 * 3;
  if (input.slice(-2) === "==") {
    totalByteLength -= 2;
  } else if (input.slice(-1) === "=") {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i2 = 0; i2 < input.length; i2 += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j2 = i2, limit = i2 + 3; j2 <= limit; j2++) {
      if (input[j2] !== "=") {
        if (!(input[j2] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j2]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j2]] << (limit - j2) * bitsPerLetter;
        bitLength += bitsPerLetter;
      } else {
        bits >>= bitsPerLetter;
      }
    }
    const chunkOffset = i2 / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k2 = 0; k2 < byteLength; k2++) {
      const offset = (byteLength - k2 - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k2, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
}, "fromBase64");

// node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-utf8/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fromUtf8 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var toUint8Array = /* @__PURE__ */ __name((data) => {
  if (typeof data === "string") {
    return fromUtf8(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}, "toUint8Array");

// node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var toUtf8 = /* @__PURE__ */ __name((input) => {
  if (typeof input === "string") {
    return input;
  }
  if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
    throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
  }
  return new TextDecoder("utf-8").decode(input);
}, "toUtf8");

// node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
function toBase64(_input) {
  let input;
  if (typeof _input === "string") {
    input = fromUtf8(_input);
  } else {
    input = _input;
  }
  const isArrayLike = typeof input === "object" && typeof input.length === "number";
  const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
  if (!isArrayLike && !isUint8Array) {
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  }
  let str = "";
  for (let i2 = 0; i2 < input.length; i2 += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j2 = i2, limit = Math.min(i2 + 3, input.length); j2 < limit; j2++) {
      bits |= input[j2] << (limit - j2 - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k2 = 1; k2 <= bitClusterCount; k2++) {
      const offset = (bitClusterCount - k2) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
    str += "==".slice(0, 4 - bitClusterCount);
  }
  return str;
}
__name(toBase64, "toBase64");

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
__name(transformToString, "transformToString");
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
__name(transformFromString, "transformFromString");

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter = class extends Uint8Array {
  static fromString(source, encoding = "utf-8") {
    switch (typeof source) {
      case "string":
        return transformFromString(source, encoding);
      default:
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
  }
  static mutate(source) {
    Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
    return source;
  }
  transformToString(encoding = "utf-8") {
    return transformToString(this, encoding);
  }
};
__name(Uint8ArrayBlobAdapter, "Uint8ArrayBlobAdapter");

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/stream-type-check.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/headStream.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/querystring-builder/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-uri-escape/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
var hexEncode = /* @__PURE__ */ __name((c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i2 = 0, iLen = value.length; i2 < iLen; i2++) {
        parts.push(`${key}=${escapeUri(value[i2])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
__name(buildQueryString, "buildQueryString");

// node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createRequest(url, requestOptions) {
  return new Request(url, requestOptions);
}
__name(createRequest, "createRequest");

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function requestTimeout(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}
__name(requestTimeout, "requestTimeout");

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var keepAliveSupport = {
  supported: void 0
};
var FetchHttpHandler = class {
  static create(instanceOrOptions) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new FetchHttpHandler(instanceOrOptions);
  }
  constructor(options) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
    if (keepAliveSupport.supported === void 0) {
      keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
    }
  }
  destroy() {
  }
  async handle(request, { abortSignal } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = this.config.requestTimeout;
    const keepAlive = this.config.keepAlive === true;
    const credentials = this.config.credentials;
    if (abortSignal?.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }
    let path = request.path;
    const queryString = buildQueryString(request.query || {});
    if (queryString) {
      path += `?${queryString}`;
    }
    if (request.fragment) {
      path += `#${request.fragment}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
      const username = request.username ?? "";
      const password = request.password ?? "";
      auth = `${username}:${password}@`;
    }
    const { port, method } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    const requestOptions = {
      body,
      headers: new Headers(request.headers),
      method,
      credentials
    };
    if (this.config?.cache) {
      requestOptions.cache = this.config.cache;
    }
    if (body) {
      requestOptions.duplex = "half";
    }
    if (typeof AbortController !== "undefined") {
      requestOptions.signal = abortSignal;
    }
    if (keepAliveSupport.supported) {
      requestOptions.keepalive = keepAlive;
    }
    if (typeof this.config.requestInit === "function") {
      Object.assign(requestOptions, this.config.requestInit(request));
    }
    let removeSignalEventListener = /* @__PURE__ */ __name(() => {
    }, "removeSignalEventListener");
    const fetchRequest = createRequest(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        const fetchHeaders = response.headers;
        const transformedHeaders = {};
        for (const pair of fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }
        const hasReadableStream = response.body != void 0;
        if (!hasReadableStream) {
          return response.blob().then((body2) => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2
            })
          }));
        }
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            reason: response.statusText,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(new Promise((resolve, reject) => {
        const onAbort = /* @__PURE__ */ __name(() => {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        }, "onAbort");
        if (typeof abortSignal.addEventListener === "function") {
          const signal = abortSignal;
          signal.addEventListener("abort", onAbort, { once: true });
          removeSignalEventListener = /* @__PURE__ */ __name(() => signal.removeEventListener("abort", onAbort), "removeSignalEventListener");
        } else {
          abortSignal.onabort = onAbort;
        }
      }));
    }
    return Promise.race(raceOfPromises).finally(removeSignalEventListener);
  }
  updateHttpClientConfig(key, value) {
    this.config = void 0;
    this.configProvider = this.configProvider.then((config2) => {
      config2[key] = value;
      return config2;
    });
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
};
__name(FetchHttpHandler, "FetchHttpHandler");

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var streamCollector = /* @__PURE__ */ __name(async (stream) => {
  if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
    if (Blob.prototype.arrayBuffer !== void 0) {
      return new Uint8Array(await stream.arrayBuffer());
    }
    return collectBlob(stream);
  }
  return collectStream(stream);
}, "streamCollector");
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
__name(collectBlob, "collectBlob");
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
__name(collectStream, "collectStream");
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
__name(readToBase64, "readToBase64");

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (let i2 = 0; i2 < 256; i2++) {
  let encodedByte = i2.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX[i2] = encodedByte;
  HEX_TO_SHORT[encodedByte] = i2;
}
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i2 = 0; i2 < encoded.length; i2 += 2) {
    const encodedByte = encoded.slice(i2, i2 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i2 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
__name(fromHex, "fromHex");
function toHex(bytes) {
  let out = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2++) {
    out += SHORT_TO_HEX[bytes[i2]];
  }
  return out;
}
__name(toHex, "toHex");

// node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context2) => {
  if (streamBody instanceof Uint8Array) {
    return Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
  }
  const fromContext = context2.streamCollector(streamBody);
  return Uint8ArrayBlobAdapter.mutate(await fromContext);
}, "collectBody");

// node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/setFeature.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function setFeature(context2, feature, value) {
  if (!context2.__smithy_context) {
    context2.__smithy_context = {
      features: {}
    };
  } else if (!context2.__smithy_context.features) {
    context2.__smithy_context.features = {};
  }
  context2.__smithy_context.features[feature] = value;
}
__name(setFeature, "setFeature");

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DefaultIdentityProviderConfig = class {
  constructor(config2) {
    this.authSchemes = /* @__PURE__ */ new Map();
    for (const [key, value] of Object.entries(config2)) {
      if (value !== void 0) {
        this.authSchemes.set(key, value);
      }
    }
  }
  getIdentityProvider(schemeId) {
    return this.authSchemes.get(schemeId);
  }
};
__name(DefaultIdentityProviderConfig, "DefaultIdentityProviderConfig");

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs, "createIsIdentityExpiredFunction");
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
var memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  if (provider === void 0) {
    return void 0;
  }
  const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
    if (!pending) {
      pending = normalizedProvider(options);
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }
    if (!requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
}, "memoizeIdentityProvider");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
var DEFAULT_UA_APP_ID = void 0;
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
__name(isValidUserAgentAppId, "isValidUserAgentAppId");
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;
  return Object.assign(input, {
    customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
    userAgentAppId: async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger2?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    }
  });
}
__name(resolveUserAgentConfig, "resolveUserAgentConfig");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var EndpointCache2 = class {
  constructor({ size, params }) {
    this.data = /* @__PURE__ */ new Map();
    this.parameters = [];
    this.capacity = size ?? 50;
    if (params) {
      this.parameters = params;
    }
  }
  get(endpointParams, resolver) {
    const key = this.hash(endpointParams);
    if (key === false) {
      return resolver();
    }
    if (!this.data.has(key)) {
      if (this.data.size > this.capacity + 10) {
        const keys = this.data.keys();
        let i2 = 0;
        while (true) {
          const { value, done } = keys.next();
          this.data.delete(value);
          if (done || ++i2 > 10) {
            break;
          }
        }
      }
      this.data.set(key, resolver());
    }
    return this.data.get(key);
  }
  size() {
    return this.data.size;
  }
  hash(endpointParams) {
    let buffer = "";
    const { parameters } = this;
    if (parameters.length === 0) {
      return false;
    }
    for (const param of parameters) {
      const val = String(endpointParams[param] ?? "");
      if (val.includes("|;")) {
        return false;
      }
      buffer += val + "|;";
    }
    return buffer;
  }
};
__name(EndpointCache2, "EndpointCache");

// node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
var isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");

// node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
var isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (!allowSubDomains) {
    return VALID_HOST_LABEL_REGEX.test(value);
  }
  const labels = value.split(".");
  for (const label of labels) {
    if (!isValidHostLabel(label)) {
      return false;
    }
  }
  return true;
}, "isValidHostLabel");

// node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var customEndpointFunctions = {};

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/debug/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var debugId = "endpoints";

// node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
__name(toDebugString, "toDebugString");

// node_modules/@smithy/util-endpoints/dist-es/types/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var EndpointError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "EndpointError";
  }
};
__name(EndpointError, "EndpointError");

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/shared.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/lib/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAttrPathList = /* @__PURE__ */ __name((path) => {
  const parts = path.split(".");
  const pathList = [];
  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
      }
      if (squareBracketIndex !== 0) {
        pathList.push(part.slice(0, squareBracketIndex));
      }
      pathList.push(arrayIndex);
    } else {
      pathList.push(part);
    }
  }
  return pathList;
}, "getAttrPathList");

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
  if (typeof acc !== "object") {
    throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
  } else if (Array.isArray(acc)) {
    return acc[parseInt(index)];
  }
  return acc[index];
}, value), "getAttr");

// node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");

// node_modules/@smithy/util-endpoints/dist-es/lib/not.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var not = /* @__PURE__ */ __name((value) => !value, "not");

// node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_PORTS = {
  [EndpointURLScheme.HTTP]: 80,
  [EndpointURLScheme.HTTPS]: 443
};
var parseURL = /* @__PURE__ */ __name((value) => {
  const whatwgURL = (() => {
    try {
      if (value instanceof URL) {
        return value;
      }
      if (typeof value === "object" && "hostname" in value) {
        const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
        const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
        url.search = Object.entries(query).map(([k2, v2]) => `${k2}=${v2}`).join("&");
        return url;
      }
      return new URL(value);
    } catch (error3) {
      return null;
    }
  })();
  if (!whatwgURL) {
    console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
    return null;
  }
  const urlString = whatwgURL.href;
  const { host, hostname, pathname, protocol, search } = whatwgURL;
  if (search) {
    return null;
  }
  const scheme = protocol.slice(0, -1);
  if (!Object.values(EndpointURLScheme).includes(scheme)) {
    return null;
  }
  const isIp = isIpAddress(hostname);
  const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
  const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
  return {
    scheme,
    authority,
    path: pathname,
    normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
    isIp
  };
}, "parseURL");

// node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");

// node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
  if (start >= stop || input.length < stop) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
}, "substring");

// node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions = {
  booleanEquals,
  getAttr,
  isSet,
  isValidHostLabel,
  not,
  parseURL,
  stringEquals,
  substring,
  uriEncode
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
  const evaluatedTemplateArr = [];
  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  let currentIndex = 0;
  while (currentIndex < template.length) {
    const openingBraceIndex = template.indexOf("{", currentIndex);
    if (openingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(currentIndex));
      break;
    }
    evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
    const closingBraceIndex = template.indexOf("}", openingBraceIndex);
    if (closingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex));
      break;
    }
    if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
      currentIndex = closingBraceIndex + 2;
    }
    const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
    if (parameterName.includes("#")) {
      const [refName, attrName] = parameterName.split("#");
      evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
    } else {
      evaluatedTemplateArr.push(templateContext[parameterName]);
    }
    currentIndex = closingBraceIndex + 1;
  }
  return evaluatedTemplateArr.join("");
}, "evaluateTemplate");

// node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  return referenceRecord[ref];
}, "getReferenceValue");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if (obj["fn"]) {
    return callFunction(obj, options);
  } else if (obj["ref"]) {
    return getReferenceValue(obj, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
}, "evaluateExpression");

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var callFunction = /* @__PURE__ */ __name(({ fn, argv: argv2 }, options) => {
  const evaluatedArgs = argv2.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
  const fnSegments = fn.split(".");
  if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
    return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
  }
  return endpointFunctions[fn](...evaluatedArgs);
}, "callFunction");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
  return {
    result: value === "" ? true : !!value,
    ...assign != null && { toAssign: { name: assign, value } }
  };
}, "evaluateCondition");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
  const conditionsReferenceRecord = {};
  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord
      }
    });
    if (!result) {
      return { result };
    }
    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
      options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
    }
  }
  return { result: true, referenceRecord: conditionsReferenceRecord };
}, "evaluateConditions");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
  ...acc,
  [headerKey]: headerVal.map((headerValEntry) => {
    const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
    if (typeof processedExpr !== "string") {
      throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
    }
    return processedExpr;
  })
}), {}), "getEndpointHeaders");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      if (property === null) {
        throw new EndpointError(`Unexpected endpoint property: ${property}`);
      }
      return getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
}, "getEndpointProperty");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
  ...acc,
  [propertyKey]: getEndpointProperty(propertyVal, options)
}), {}), "getEndpointProperties");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    try {
      return new URL(expression);
    } catch (error3) {
      console.error(`Failed to construct URL with ${expression}`, error3);
      throw error3;
    }
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
}, "getEndpointUrl");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
  const { conditions, endpoint } = endpointRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  };
  const { url, properties, headers } = endpoint;
  options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
  return {
    ...headers != void 0 && {
      headers: getEndpointHeaders(headers, endpointRuleOptions)
    },
    ...properties != void 0 && {
      properties: getEndpointProperties(properties, endpointRuleOptions)
    },
    url: getEndpointUrl(url, endpointRuleOptions)
  };
}, "evaluateEndpointRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
  const { conditions, error: error3 } = errorRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  throw new EndpointError(evaluateExpression(error3, "Error", {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  }));
}, "evaluateErrorRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
  const { conditions, rules } = treeRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  return evaluateRules(rules, {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  });
}, "evaluateTreeRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules = /* @__PURE__ */ __name((rules, options) => {
  for (const rule of rules) {
    if (rule.type === "endpoint") {
      const endpointOrUndefined = evaluateEndpointRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else if (rule.type === "error") {
      evaluateErrorRule(rule, options);
    } else if (rule.type === "tree") {
      const endpointOrUndefined = evaluateTreeRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else {
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
}, "evaluateRules");

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint = /* @__PURE__ */ __name((ruleSetObject, options) => {
  const { endpointParams, logger: logger2 } = options;
  const { parameters, rules } = ruleSetObject;
  options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
  const paramsWithDefault = Object.entries(parameters).filter(([, v2]) => v2.default != null).map(([k2, v2]) => [k2, v2.default]);
  if (paramsWithDefault.length > 0) {
    for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
      endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
    }
  }
  const requiredParams = Object.entries(parameters).filter(([, v2]) => v2.required).map(([k2]) => k2);
  for (const requiredParam of requiredParams) {
    if (endpointParams[requiredParam] == null) {
      throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
    }
  }
  const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
  options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
  return endpoint;
}, "resolveEndpoint");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
}, "isVirtualHostableS3Bucket");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ARN_DELIMITER = ":";
var RESOURCE_DELIMITER = "/";
var parseArn = /* @__PURE__ */ __name((value) => {
  const segments = value.split(ARN_DELIMITER);
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
    return null;
  const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId
  };
}, "parseArn");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default = {
  partitions: [{
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-east-1",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "ap-southeast-5": {
        description: "Asia Pacific (Malaysia)"
      },
      "ap-southeast-7": {
        description: "Asia Pacific (Thailand)"
      },
      "aws-global": {
        description: "AWS Standard global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "ca-west-1": {
        description: "Canada West (Calgary)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "il-central-1": {
        description: "Israel (Tel Aviv)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "mx-central-1": {
        description: "Mexico (Central)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      implicitGlobalRegion: "cn-northwest-1",
      name: "aws-cn",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "AWS China global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-gov-west-1",
      name: "aws-us-gov",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "AWS GovCloud (US) global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "c2s.ic.gov",
      implicitGlobalRegion: "us-iso-east-1",
      name: "aws-iso",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "AWS ISO (US) global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "sc2s.sgov.gov",
      implicitGlobalRegion: "us-isob-east-1",
      name: "aws-iso-b",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "AWS ISOB (US) global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "cloud.adc-e.uk",
      implicitGlobalRegion: "eu-isoe-west-1",
      name: "aws-iso-e",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-e-global": {
        description: "AWS ISOE (Europe) global region"
      },
      "eu-isoe-west-1": {
        description: "EU ISOE West"
      }
    }
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "csp.hci.ic.gov",
      implicitGlobalRegion: "us-isof-south-1",
      name: "aws-iso-f",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-f-global": {
        description: "AWS ISOF global region"
      },
      "us-isof-east-1": {
        description: "US ISOF EAST"
      },
      "us-isof-south-1": {
        description: "US ISOF SOUTH"
      }
    }
  }, {
    id: "aws-eusc",
    outputs: {
      dnsSuffix: "amazonaws.eu",
      dualStackDnsSuffix: "amazonaws.eu",
      implicitGlobalRegion: "eusc-de-east-1",
      name: "aws-eusc",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
    regions: {
      "eusc-de-east-1": {
        description: "EU (Germany)"
      }
    }
  }],
  version: "1.1"
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = /* @__PURE__ */ __name((value) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
}, "partition");
var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions = {
  isVirtualHostableS3Bucket,
  parseArn,
  partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
__name(setCredentialFeature, "setCredentialFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function setFeature2(context2, feature, value) {
  if (!context2.__aws_sdk_context) {
    context2.__aws_sdk_context = {
      features: {}
    };
  } else if (!context2.__aws_sdk_context.features) {
    context2.__aws_sdk_context.features = {};
  }
  context2.__aws_sdk_context.features[feature] = value;
}
__name(setFeature2, "setFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
}, "getUpdatedSystemClockOffset");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
}, "throwSigningPropertyError");
var validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
  const context2 = throwSigningPropertyError("context", signingProperties.context);
  const config2 = throwSigningPropertyError("config", signingProperties.config);
  const authScheme = context2.endpointV2?.properties?.authSchemes?.[0];
  const signerFunction = throwSigningPropertyError("signer", config2.signer);
  const signer = await signerFunction(authScheme);
  const signingRegion = signingProperties?.signingRegion;
  const signingRegionSet = signingProperties?.signingRegionSet;
  const signingName = signingProperties?.signingName;
  return {
    config: config2,
    signer,
    signingRegion,
    signingRegionSet,
    signingName
  };
}, "validateSigningProperties");
var AwsSdkSigV4Signer = class {
  async sign(httpRequest, identity, signingProperties) {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const validatedProps = await validateSigningProperties(signingProperties);
    const { config: config2, signer } = validatedProps;
    let { signingRegion, signingName } = validatedProps;
    const handlerExecutionContext = signingProperties.context;
    if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
      const [first, second] = handlerExecutionContext.authSchemes;
      if (first?.name === "sigv4a" && second?.name === "sigv4") {
        signingRegion = second?.signingRegion ?? signingRegion;
        signingName = second?.signingName ?? signingName;
      }
    }
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config2.systemClockOffset),
      signingRegion,
      signingService: signingName
    });
    return signedRequest;
  }
  errorHandler(signingProperties) {
    return (error3) => {
      const serverTime = error3.ServerTime ?? getDateHeader(error3.$response);
      if (serverTime) {
        const config2 = throwSigningPropertyError("config", signingProperties.config);
        const initialSystemClockOffset = config2.systemClockOffset;
        config2.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config2.systemClockOffset);
        const clockSkewCorrected = config2.systemClockOffset !== initialSystemClockOffset;
        if (clockSkewCorrected && error3.$metadata) {
          error3.$metadata.clockSkewCorrected = true;
        }
      }
      throw error3;
    };
  }
  successHandler(httpResponse, signingProperties) {
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config2 = throwSigningPropertyError("config", signingProperties.config);
      config2.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config2.systemClockOffset);
    }
  }
};
__name(AwsSdkSigV4Signer, "AwsSdkSigV4Signer");

// node_modules/@smithy/property-provider/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/chain.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/memoize.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
}, "memoize");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var signingKeyCache = {};
var cacheQueue = [];
var createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
}, "getSigningKey");
var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
}, "hmac");

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
}, "getCanonicalHeaders");

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/is-array-buffer/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
}, "getPayloadHash");

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HeaderFormatter = class {
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
};
__name(HeaderFormatter, "HeaderFormatter");
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE2) {
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int64 = class {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
__name(Int64, "Int64");
function negate(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}
__name(negate, "negate");

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
}, "hasHeader");

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var moveHeadersToQuery = /* @__PURE__ */ __name((request, options = {}) => {
  const { headers, query = {} } = HttpRequest.clone(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
}, "moveHeadersToQuery");

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var prepareRequest = /* @__PURE__ */ __name((request) => {
  request = HttpRequest.clone(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
}, "prepareRequest");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query)) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    const encodedKey = escapeUri(key);
    keys.push(encodedKey);
    const value = query[key];
    if (typeof value === "string") {
      serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
    }
  }
  return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
}, "getCanonicalQuery");

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var iso8601 = /* @__PURE__ */ __name((time3) => toDate(time3).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
var toDate = /* @__PURE__ */ __name((time3) => {
  if (typeof time3 === "number") {
    return new Date(time3 * 1e3);
  }
  if (typeof time3 === "string") {
    if (Number(time3)) {
      return new Date(Number(time3) * 1e3);
    }
    return new Date(time3);
  }
  return time3;
}, "toDate");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base = class {
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
  formatDate(now) {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
      longDate,
      shortDate: longDate.slice(0, 8)
    };
  }
  getCanonicalHeaderList(headers) {
    return Object.keys(headers).sort().join(";");
  }
};
__name(SignatureV4Base, "SignatureV4Base");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class extends SignatureV4Base {
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    super({
      applyChecksum,
      credentials,
      region,
      service,
      sha256,
      uriEscapePath
    });
    this.headerFormatter = new HeaderFormatter();
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = this.formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }
  async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = this.formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
    return request;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
};
__name(SignatureV4, "SignatureV4");

// node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config2) => {
  let inputCredentials = config2.credentials;
  let isUserSupplied = !!config2.credentials;
  let resolvedCredentials = void 0;
  Object.defineProperty(config2, "credentials", {
    set(credentials) {
      if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
        isUserSupplied = true;
      }
      inputCredentials = credentials;
      const memoizedProvider = normalizeCredentialProvider(config2, {
        credentials: inputCredentials,
        credentialDefaultProvider: config2.credentialDefaultProvider
      });
      const boundProvider = bindCallerConfig(config2, memoizedProvider);
      if (isUserSupplied && !boundProvider.attributed) {
        resolvedCredentials = /* @__PURE__ */ __name(async (options) => boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e")), "resolvedCredentials");
        resolvedCredentials.memoized = boundProvider.memoized;
        resolvedCredentials.configBound = boundProvider.configBound;
        resolvedCredentials.attributed = true;
      } else {
        resolvedCredentials = boundProvider;
      }
    },
    get() {
      return resolvedCredentials;
    },
    enumerable: true,
    configurable: true
  });
  config2.credentials = inputCredentials;
  const { signingEscapePath = true, systemClockOffset = config2.systemClockOffset || 0, sha256 } = config2;
  let signer;
  if (config2.signer) {
    signer = normalizeProvider2(config2.signer);
  } else if (config2.regionInfoProvider) {
    signer = /* @__PURE__ */ __name(() => normalizeProvider2(config2.region)().then(async (region) => [
      await config2.regionInfoProvider(region, {
        useFipsEndpoint: await config2.useFipsEndpoint(),
        useDualstackEndpoint: await config2.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      config2.signingRegion = config2.signingRegion || signingRegion || region;
      config2.signingName = config2.signingName || signingService || config2.serviceId;
      const params = {
        ...config2,
        credentials: config2.credentials,
        region: config2.signingRegion,
        service: config2.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config2.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }), "signer");
  } else {
    signer = /* @__PURE__ */ __name(async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: config2.signingName || config2.defaultSigningName,
        signingRegion: await normalizeProvider2(config2.region)(),
        properties: {}
      }, authScheme);
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      config2.signingRegion = config2.signingRegion || signingRegion;
      config2.signingName = config2.signingName || signingService || config2.serviceId;
      const params = {
        ...config2,
        credentials: config2.credentials,
        region: config2.signingRegion,
        service: config2.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config2.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }, "signer");
  }
  const resolvedConfig = Object.assign(config2, {
    systemClockOffset,
    signingEscapePath,
    signer
  });
  return resolvedConfig;
}, "resolveAwsSdkSigV4Config");
function normalizeCredentialProvider(config2, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config2, {
        parentClientConfig: config2
      })));
    } else {
      credentialsProvider = /* @__PURE__ */ __name(async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      }, "credentialsProvider");
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
__name(normalizeCredentialProvider, "normalizeCredentialProvider");
function bindCallerConfig(config2, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = /* @__PURE__ */ __name(async (options) => credentialsProvider({ ...options, callerClientConfig: config2 }), "fn");
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
__name(bindCallerConfig, "bindCallerConfig");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/client.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-stack/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
  const _aliases = [];
  if (name) {
    _aliases.push(name);
  }
  if (aliases) {
    for (const alias of aliases) {
      _aliases.push(alias);
    }
  }
  return _aliases;
}, "getAllAliases");
var getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
  return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
}, "getMiddlewareNameWithAliases");
var constructStack = /* @__PURE__ */ __name(() => {
  let absoluteEntries = [];
  let relativeEntries = [];
  let identifyOnResolve = false;
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = /* @__PURE__ */ __name((entries) => entries.sort((a2, b2) => stepWeights[b2.step] - stepWeights[a2.step] || priorityWeights[b2.priority || "normal"] - priorityWeights[a2.priority || "normal"]), "sort");
  const removeByName = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      const aliases = getAllAliases(entry.name, entry.aliases);
      if (aliases.includes(toRemove)) {
        isRemoved = true;
        for (const alias of aliases) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByName");
  const removeByReference = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        for (const alias of getAllAliases(entry.name, entry.aliases)) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByReference");
  const cloneTo = /* @__PURE__ */ __name((toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    toStack.identifyOnResolve?.(stack.identifyOnResolve());
    return toStack;
  }, "cloneTo");
  const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  }, "expandRelativeMiddlewareList");
  const getMiddlewareList = /* @__PURE__ */ __name((debug3 = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug3) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
      wholeList.push(...expandedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  }, "getMiddlewareList");
  const stack = {
    add: (middleware, options = {}) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = absoluteEntries[toOverrideIndex];
            if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
            }
            absoluteEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: (middleware, options) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = relativeEntries[toOverrideIndex];
            if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
            }
            relativeEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      relativeEntries.push(entry);
    },
    clone: () => cloneTo(constructStack()),
    use: (plugin) => {
      plugin.applyToStack(stack);
    },
    remove: (toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    },
    removeByTag: (toRemove) => {
      let isRemoved = false;
      const filterCb = /* @__PURE__ */ __name((entry) => {
        const { tags, name, aliases: _aliases } = entry;
        if (tags && tags.includes(toRemove)) {
          const aliases = getAllAliases(name, _aliases);
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          isRemoved = true;
          return false;
        }
        return true;
      }, "filterCb");
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    },
    concat: (from) => {
      const cloned = cloneTo(constructStack());
      cloned.use(from);
      cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
      return cloned;
    },
    applyToStack: cloneTo,
    identify: () => {
      return getMiddlewareList(true).map((mw) => {
        const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
        return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
      });
    },
    identifyOnResolve(toggle) {
      if (typeof toggle === "boolean")
        identifyOnResolve = toggle;
      return identifyOnResolve;
    },
    resolve: (handler, context2) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler = middleware(handler, context2);
      }
      if (identifyOnResolve) {
        console.log(stack.identify());
      }
      return handler;
    }
  };
  return stack;
}, "constructStack");
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
  constructor(config2) {
    this.config = config2;
    this.middlewareStack = constructStack();
  }
  send(command, optionsOrCb, cb) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
    let handler;
    if (useHandlerCache) {
      if (!this.handlers) {
        this.handlers = /* @__PURE__ */ new WeakMap();
      }
      const handlers = this.handlers;
      if (handlers.has(command.constructor)) {
        handler = handlers.get(command.constructor);
      } else {
        handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        handlers.set(command.constructor, handler);
      }
    } else {
      delete this.handlers;
      handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    }
    if (callback) {
      handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    this.config?.requestHandler?.destroy?.();
    delete this.handlers;
  }
};
__name(Client, "Client");

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/command.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Command = class {
  constructor() {
    this.middlewareStack = constructStack();
  }
  static classBuilder() {
    return new ClassBuilder();
  }
  resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
    for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
      this.middlewareStack.use(mw);
    }
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        commandInstance: this,
        ...smithyContext
      },
      ...additionalContext
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
};
__name(Command, "Command");
var ClassBuilder = class {
  constructor() {
    this._init = () => {
    };
    this._ep = {};
    this._middlewareFn = () => [];
    this._commandName = "";
    this._clientName = "";
    this._additionalContext = {};
    this._smithyContext = {};
    this._inputFilterSensitiveLog = (_) => _;
    this._outputFilterSensitiveLog = (_) => _;
    this._serializer = null;
    this._deserializer = null;
  }
  init(cb) {
    this._init = cb;
  }
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  s(service, operation, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation,
      ...smithyContext
    };
    return this;
  }
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  f(inputFilter = (_) => _, outputFilter = (_) => _) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  build() {
    const closure = this;
    let CommandRef;
    return CommandRef = /* @__PURE__ */ __name(class extends Command {
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      constructor(...[input]) {
        super();
        this.serialize = closure._serializer;
        this.deserialize = closure._deserializer;
        this.input = input ?? {};
        closure._init(this);
      }
      resolveMiddleware(stack, configuration, options) {
        return this.resolveMiddlewareWithContext(stack, configuration, options, {
          CommandCtor: CommandRef,
          middlewareFn: closure._middlewareFn,
          clientName: closure._clientName,
          commandName: closure._commandName,
          inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
          outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
          smithyContext: closure._smithyContext,
          additionalContext: closure._additionalContext
        });
      }
    }, "CommandRef");
  }
};
__name(ClassBuilder, "ClassBuilder");

// node_modules/@smithy/smithy-client/dist-es/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/date-utils.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/parse-utils.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var expectBoolean = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "number") {
    if (value === 0 || value === 1) {
      logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
    }
    if (value === 0) {
      return false;
    }
    if (value === 1) {
      return true;
    }
  }
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower === "false" || lower === "true") {
      logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
    }
    if (lower === "false") {
      return false;
    }
    if (lower === "true") {
      return true;
    }
  }
  if (typeof value === "boolean") {
    return value;
  }
  throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
}, "expectBoolean");
var expectNumber = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      if (String(parsed) !== String(value)) {
        logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
      }
      return parsed;
    }
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
}, "expectNumber");
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
var expectLong = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
}, "expectLong");
var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
  const expected = expectLong(value);
  if (expected !== void 0 && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
}, "expectSizedInt");
var castInt = /* @__PURE__ */ __name((value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
}, "castInt");
var expectObject = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  const receivedType = Array.isArray(value) ? "array" : typeof value;
  throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
}, "expectObject");
var expectString = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
}, "expectString");
var expectUnion = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  const asObject = expectObject(value);
  const setKeys = Object.entries(asObject).filter(([, v2]) => v2 != null).map(([k2]) => k2);
  if (setKeys.length === 0) {
    throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
  }
  if (setKeys.length > 1) {
    throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
  }
  return asObject;
}, "expectUnion");
var limitedParseDouble = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return parseFloatString(value);
  }
  return expectNumber(value);
}, "limitedParseDouble");
var parseFloatString = /* @__PURE__ */ __name((value) => {
  switch (value) {
    case "NaN":
      return NaN;
    case "Infinity":
      return Infinity;
    case "-Infinity":
      return -Infinity;
    default:
      throw new Error(`Unable to parse float value: ${value}`);
  }
}, "parseFloatString");
var stackTraceWarning = /* @__PURE__ */ __name((message) => {
  return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s2) => !s2.includes("stackTraceWarning")).join("\n");
}, "stackTraceWarning");
var logger = {
  warn: console.warn
};

// node_modules/@smithy/smithy-client/dist-es/date-utils.js
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ServiceException = class extends Error {
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
  static isInstance(value) {
    if (!value)
      return false;
    const candidate = value;
    return ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
  }
  static [Symbol.hasInstance](instance) {
    if (!instance)
      return false;
    const candidate = instance;
    if (this === ServiceException) {
      return ServiceException.isInstance(instance);
    }
    if (ServiceException.isInstance(instance)) {
      if (candidate.name && this.name) {
        return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
      }
      return this.prototype.isPrototypeOf(instance);
    }
    return false;
  }
};
__name(ServiceException, "ServiceException");
var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
  Object.entries(additions).filter(([, v2]) => v2 !== void 0).forEach(([k2, v2]) => {
    if (exception[k2] == void 0 || exception[k2] === "") {
      exception[k2] = v2;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
}, "decorateServiceException");

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
  const response = new exceptionCtor({
    name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata
  });
  throw decorateServiceException(response, parsedBody);
}, "throwDefaultError");
var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
  return ({ output, parsedBody, errorCode }) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
}, "withBaseException");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, "loadConfigsForDefaultMode");

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extensions/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getChecksumConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
  const checksumAlgorithms = [];
  for (const id in AlgorithmId) {
    const algorithmId = AlgorithmId[id];
    if (runtimeConfig[algorithmId] === void 0) {
      continue;
    }
    checksumAlgorithms.push({
      algorithmId: () => algorithmId,
      checksumConstructor: () => runtimeConfig[algorithmId]
    });
  }
  return {
    addChecksumAlgorithm(algo) {
      checksumAlgorithms.push(algo);
    },
    checksumAlgorithms() {
      return checksumAlgorithms;
    }
  };
}, "getChecksumConfiguration");
var resolveChecksumRuntimeConfig2 = /* @__PURE__ */ __name((clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
  });
  return runtimeConfig;
}, "resolveChecksumRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setRetryStrategy(retryStrategy) {
      runtimeConfig.retryStrategy = retryStrategy;
    },
    retryStrategy() {
      return runtimeConfig.retryStrategy;
    }
  };
}, "getRetryConfiguration");
var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
  const runtimeConfig = {};
  runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
  return runtimeConfig;
}, "resolveRetryRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return Object.assign(getChecksumConfiguration2(runtimeConfig), getRetryConfiguration(runtimeConfig));
}, "getDefaultExtensionConfiguration");
var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return Object.assign(resolveChecksumRuntimeConfig2(config2), resolveRetryRuntimeConfig(config2));
}, "resolveDefaultRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/lazy-json.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LazyJsonString = /* @__PURE__ */ __name(function LazyJsonString2(val) {
  const str = Object.assign(new String(val), {
    deserializeJSON() {
      return JSON.parse(String(val));
    },
    toString() {
      return String(val);
    },
    toJSON() {
      return String(val);
    }
  });
  return str;
}, "LazyJsonString");
LazyJsonString.from = (object) => {
  if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
    return object;
  } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
    return LazyJsonString(String(object));
  }
  return LazyJsonString(JSON.stringify(object));
};
LazyJsonString.fromObject = LazyJsonString.from;

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var NoOpLogger = class {
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};
__name(NoOpLogger, "NoOpLogger");

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var take = /* @__PURE__ */ __name((source, instructions) => {
  const out = {};
  for (const key in instructions) {
    applyInstruction(out, source, instructions, key);
  }
  return out;
}, "take");
var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }
  let [filter, value] = instructions[targetKey];
  if (typeof value === "function") {
    let _value;
    const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
    const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === void 0 && value != null;
    const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
}, "applyInstruction");
var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
var pass = /* @__PURE__ */ __name((_) => _, "pass");

// node_modules/@smithy/smithy-client/dist-es/quote-header.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/resolve-path.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _json = /* @__PURE__ */ __name((obj) => {
  if (obj == null) {
    return {};
  }
  if (Array.isArray(obj)) {
    return obj.filter((_) => _ != null).map(_json);
  }
  if (typeof obj === "object") {
    const target = {};
    for (const key of Object.keys(obj)) {
      if (obj[key] == null) {
        continue;
      }
      target[key] = _json(obj[key]);
    }
    return target;
  }
  return obj;
}, "_json");

// node_modules/@smithy/smithy-client/dist-es/split-every.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/split-header.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var awsExpectUnion = /* @__PURE__ */ __name((value) => {
  if (value == null) {
    return void 0;
  }
  if (typeof value === "object" && "__type" in value) {
    delete value.__type;
  }
  return expectUnion(value);
}, "awsExpectUnion");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var collectBodyString = /* @__PURE__ */ __name((streamBody, context2) => collectBody(streamBody, context2).then((body) => context2.utf8Encoder(body)), "collectBodyString");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody = /* @__PURE__ */ __name((streamBody, context2) => collectBodyString(streamBody, context2).then((encoded) => {
  if (encoded.length) {
    try {
      return JSON.parse(encoded);
    } catch (e2) {
      if (e2?.name === "SyntaxError") {
        Object.defineProperty(e2, "$responseBodyText", {
          value: encoded
        });
      }
      throw e2;
    }
  }
  return {};
}), "parseJsonBody");
var parseJsonErrorBody = /* @__PURE__ */ __name(async (errorBody, context2) => {
  const value = await parseJsonBody(errorBody, context2);
  value.message = value.message ?? value.Message;
  return value;
}, "parseJsonErrorBody");
var loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context2, config2, args) {
  const request = args.request;
  if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature2(context2, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config2.retryStrategy === "function") {
    const retryStrategy = await config2.retryStrategy();
    if (typeof retryStrategy.acquireInitialRetryToken === "function") {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature2(context2, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature2(context2, "RETRY_MODE_STANDARD", "E");
      }
    } else {
      setFeature2(context2, "RETRY_MODE_LEGACY", "D");
    }
  }
  if (typeof config2.accountIdEndpointMode === "function") {
    const endpointV2 = context2.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature2(context2, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config2.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature2(context2, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature2(context2, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature2(context2, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context2.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature2(context2, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature2(context2, key, value);
    }
  }
}
__name(checkFeatures, "checkFeatures");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BYTE_LIMIT = 1024;
function encodeFeatures(features2) {
  let buffer = "";
  for (const key in features2) {
    const val = features2[key];
    if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val;
      } else {
        buffer += val;
      }
      continue;
    }
    break;
  }
  return buffer;
}
__name(encodeFeatures, "encodeFeatures");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context2) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) {
    return next(args);
  }
  const { headers } = request;
  const userAgent = context2?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  await checkFeatures(context2, options, args);
  const awsContext = context2;
  defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context2.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const appId = await options.userAgentAppId();
  if (appId) {
    defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
  }
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request
  });
}, "userAgentMiddleware");
var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version2 = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version2].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
}, "escapeUserAgent");
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = /* @__PURE__ */ __name((config2) => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config2), getUserAgentMiddlewareOptions);
  }
}), "getUserAgentPlugin");

// node_modules/@smithy/config-resolver/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SelectorType;
(function(SelectorType2) {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var DEFAULT_USE_DUALSTACK_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_USE_FIPS_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return Object.assign(input, {
    region: async () => {
      if (typeof region === "string") {
        return getRealRegion(region);
      }
      const providedRegion = await region();
      return getRealRegion(providedRegion);
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }
  });
}, "resolveRegionConfig");

// node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-content-length/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
      const { body, headers } = request;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request.headers = {
            ...request.headers,
            [CONTENT_LENGTH_HEADER]: String(length)
          };
        } catch (error3) {
        }
      }
    }
    return next({
      ...args,
      request
    });
  };
}
__name(contentLengthMiddleware, "contentLengthMiddleware");
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  }
}), "getContentLengthPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
  const bucket = endpointParams?.Bucket || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
}, "resolveParamsForS3");
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
  const [arn, partition2, service, , , bucket] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = Boolean(isArn && partition2 && service && bucket);
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return isValidArn;
}, "isArnBucketName");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config2) => {
  const configProvider = /* @__PURE__ */ __name(async () => {
    const configValue = config2[configKey] ?? config2[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  }, "configProvider");
  if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
    return async () => {
      const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
      const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
      return configValue;
    };
  }
  if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
    return async () => {
      const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
      const configValue = credentials?.accountId ?? credentials?.AccountId;
      return configValue;
    };
  }
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
}, "createConfigValueProvider");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointFromConfig = /* @__PURE__ */ __name(async (serviceId) => void 0, "getEndpointFromConfig");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/url-parser/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/querystring-parser/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
__name(parseQueryString, "parseQueryString");

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl = /* @__PURE__ */ __name((url) => {
  if (typeof url === "string") {
    return parseUrl(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
}, "parseUrl");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl(endpoint);
}, "toEndpointV1");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context2) => {
  if (!clientConfig.endpoint) {
    let endpointFromConfig;
    if (clientConfig.serviceConfiguredEndpoint) {
      endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
    } else {
      endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
    }
    if (endpointFromConfig) {
      clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
    }
  }
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context2);
  return endpoint;
}, "getEndpointFromInstructions");
var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
  const endpointParams = {};
  const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
        break;
      case "operationContextParams":
        endpointParams[name] = instruction.get(commandInput);
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }
  return endpointParams;
}, "resolveParams");

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var endpointMiddleware = /* @__PURE__ */ __name(({ config: config2, instructions }) => {
  return (next, context2) => async (args) => {
    if (config2.endpoint) {
      setFeature(context2, "ENDPOINT_OVERRIDE", "N");
    }
    const endpoint = await getEndpointFromInstructions(args.input, {
      getEndpointParameterInstructions() {
        return instructions;
      }
    }, { ...config2 }, context2);
    context2.endpointV2 = endpoint;
    context2.authSchemes = endpoint.properties?.authSchemes;
    const authScheme = context2.authSchemes?.[0];
    if (authScheme) {
      context2["signing_region"] = authScheme.signingRegion;
      context2["signing_service"] = authScheme.signingName;
      const smithyContext = getSmithyContext(context2);
      const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
      if (httpAuthOption) {
        httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
          signing_region: authScheme.signingRegion,
          signingRegion: authScheme.signingRegion,
          signing_service: authScheme.signingName,
          signingName: authScheme.signingName,
          signingRegionSet: authScheme.signingRegionSet
        }, authScheme.properties);
      }
    }
    return next({
      ...args
    });
  };
}, "endpointMiddleware");

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};
var getEndpointPlugin = /* @__PURE__ */ __name((config2, instructions) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(endpointMiddleware({
      config: config2,
      instructions
    }), endpointMiddlewareOptions);
  }
}), "getEndpointPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
  const tls = input.tls ?? true;
  const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
  const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  const resolvedConfig = Object.assign(input, {
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false)
  });
  let configuredEndpointPromise = void 0;
  resolvedConfig.serviceConfiguredEndpoint = async () => {
    if (input.serviceId && !configuredEndpointPromise) {
      configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
    }
    return configuredEndpointPromise;
  };
  return resolvedConfig;
}, "resolveEndpointConfig");

// node_modules/@smithy/middleware-endpoint/dist-es/types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/config.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/service-error-classification/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/service-error-classification/dist-es/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

// node_modules/@smithy/service-error-classification/dist-es/index.js
var isClockSkewCorrectedError = /* @__PURE__ */ __name((error3) => error3.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError");
var isThrottlingError = /* @__PURE__ */ __name((error3) => error3.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error3.name) || error3.$retryable?.throttling == true, "isThrottlingError");
var isTransientError = /* @__PURE__ */ __name((error3, depth = 0) => isClockSkewCorrectedError(error3) || TRANSIENT_ERROR_CODES.includes(error3.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error3?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error3.$metadata?.httpStatusCode || 0) || error3.cause !== void 0 && depth <= 10 && isTransientError(error3.cause, depth + 1), "isTransientError");
var isServerError = /* @__PURE__ */ __name((error3) => {
  if (error3.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error3.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error3)) {
      return true;
    }
    return false;
  }
  return false;
}, "isServerError");

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class {
  constructor(options) {
    this.currentCapacity = 0;
    this.enabled = false;
    this.lastMaxRate = 0;
    this.measuredTxRate = 0;
    this.requestCount = 0;
    this.lastTimestamp = 0;
    this.timeWindow = 0;
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
      await new Promise((resolve) => DefaultRateLimiter.setTimeoutFn(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    if (isThrottlingError(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t2 = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t2 * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};
__name(DefaultRateLimiter, "DefaultRateLimiter");
DefaultRateLimiter.setTimeoutFn = setTimeout;

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  }, "computeNextBackoffDelay");
  const setDelayBase = /* @__PURE__ */ __name((delay) => {
    delayBase = delay;
  }, "setDelayBase");
  return {
    computeNextBackoffDelay,
    setDelayBase
  };
}, "getDefaultRetryBackoffStrategy");

// node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createDefaultRetryToken = /* @__PURE__ */ __name(({ retryDelay, retryCount, retryCost }) => {
  const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
  const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
  const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost
  };
}, "createDefaultRetryToken");

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.mode = RETRY_MODES.STANDARD;
    this.capacity = INITIAL_RETRY_TOKENS;
    this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return createDefaultRetryToken({
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error3) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
  }
  getCapacityCost(errorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};
__name(StandardRetryStrategy, "StandardRetryStrategy");

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = RETRY_MODES.ADAPTIVE;
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
};
__name(AdaptiveRetryStrategy, "AdaptiveRetryStrategy");

// node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/uuid/dist/esm-browser/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/uuid/dist/esm-browser/rng.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
__name(rng, "rng");

// node_modules/uuid/dist/esm-browser/stringify.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
__name(unsafeStringify, "unsafeStringify");

// node_modules/uuid/dist/esm-browser/v4.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/uuid/dist/esm-browser/native.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i2 = 0; i2 < 16; ++i2) {
      buf[offset + i2] = rnds[i2];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
__name(v4, "v4");
var v4_default = v4;

// node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/util.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var asSdkError = /* @__PURE__ */ __name((error3) => {
  if (error3 instanceof Error)
    return error3;
  if (error3 instanceof Object)
    return Object.assign(new Error(), error3);
  if (typeof error3 === "string")
    return new Error(error3);
  return new Error(`AWS SDK error wrapper for ${error3}`);
}, "asSdkError");

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveRetryConfig = /* @__PURE__ */ __name((input) => {
  const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
  const maxAttempts = normalizeProvider(_maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  return Object.assign(input, {
    maxAttempts,
    retryStrategy: async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await normalizeProvider(_retryMode)();
      if (retryMode === RETRY_MODES.ADAPTIVE) {
        return new AdaptiveRetryStrategy(maxAttempts);
      }
      return new StandardRetryStrategy(maxAttempts);
    }
  });
}, "resolveRetryConfig");

// node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isStreamingPayload = /* @__PURE__ */ __name((request) => request?.body instanceof ReadableStream, "isStreamingPayload");

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware = /* @__PURE__ */ __name((options) => (next, context2) => async (args) => {
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context2["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request } = args;
    const isRequest = HttpRequest.isInstance(request);
    if (isRequest) {
      request.headers[INVOCATION_ID_HEADER] = v4_default();
    }
    while (true) {
      try {
        if (isRequest) {
          request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e2) {
        const retryErrorInfo = getRetryErrorInfo(e2);
        lastError = asSdkError(e2);
        if (isRequest && isStreamingPayload(request)) {
          (context2.logger instanceof NoOpLogger ? console : context2.logger)?.warn("An error was encountered in a non-retryable streaming request.");
          throw lastError;
        }
        try {
          retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
        } catch (refreshError) {
          if (!lastError.$metadata) {
            lastError.$metadata = {};
          }
          lastError.$metadata.attempts = attempts + 1;
          lastError.$metadata.totalRetryDelay = totalRetryDelay;
          throw lastError;
        }
        attempts = retryToken.getRetryCount();
        const delay = retryToken.getRetryDelay();
        totalRetryDelay += delay;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  } else {
    retryStrategy = retryStrategy;
    if (retryStrategy?.mode)
      context2.userAgent = [...context2.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
}, "retryMiddleware");
var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
var getRetryErrorInfo = /* @__PURE__ */ __name((error3) => {
  const errorInfo = {
    error: error3,
    errorType: getRetryErrorType(error3)
  };
  const retryAfterHint = getRetryAfterHint(error3.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
}, "getRetryErrorInfo");
var getRetryErrorType = /* @__PURE__ */ __name((error3) => {
  if (isThrottlingError(error3))
    return "THROTTLING";
  if (isTransientError(error3))
    return "TRANSIENT";
  if (isServerError(error3))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
}, "getRetryErrorType");
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  }
}), "getRetryPlugin");
var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
  if (!HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
}, "getRetryAfterHint");

// node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthSchemeProvider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var defaultDynamoDBHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config2, context2, input) => {
  return {
    operation: getSmithyContext(context2).operation,
    region: await normalizeProvider(config2.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, "defaultDynamoDBHttpAuthSchemeParametersProvider");
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "dynamodb",
      region: authParameters.region
    },
    propertiesExtractor: (config2, context2) => ({
      signingProperties: {
        config: config2,
        context: context2
      }
    })
  };
}
__name(createAwsAuthSigv4HttpAuthOption, "createAwsAuthSigv4HttpAuthOption");
var defaultDynamoDBHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
}, "defaultDynamoDBHttpAuthSchemeProvider");
var resolveHttpAuthSchemeConfig = /* @__PURE__ */ __name((config2) => {
  const config_0 = resolveAwsSdkSigV4Config(config2);
  return Object.assign(config_0, {
    authSchemePreference: normalizeProvider(config2.authSchemePreference ?? [])
  });
}, "resolveHttpAuthSchemeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "dynamodb"
  });
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  AccountId: { type: "builtInParams", name: "accountId" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
  AccountIdEndpointMode: { type: "builtInParams", name: "accountIdEndpointMode" }
};

// node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DynamoDBServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, DynamoDBServiceException.prototype);
  }
};
__name(DynamoDBServiceException, "DynamoDBServiceException");

// node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BackupInUseException = class extends DynamoDBServiceException {
  name = "BackupInUseException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BackupInUseException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, BackupInUseException.prototype);
  }
};
__name(BackupInUseException, "BackupInUseException");
var BackupNotFoundException = class extends DynamoDBServiceException {
  name = "BackupNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BackupNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, BackupNotFoundException.prototype);
  }
};
__name(BackupNotFoundException, "BackupNotFoundException");
var InternalServerError = class extends DynamoDBServiceException {
  name = "InternalServerError";
  $fault = "server";
  constructor(opts) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
};
__name(InternalServerError, "InternalServerError");
var RequestLimitExceeded = class extends DynamoDBServiceException {
  name = "RequestLimitExceeded";
  $fault = "client";
  constructor(opts) {
    super({
      name: "RequestLimitExceeded",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, RequestLimitExceeded.prototype);
  }
};
__name(RequestLimitExceeded, "RequestLimitExceeded");
var InvalidEndpointException = class extends DynamoDBServiceException {
  name = "InvalidEndpointException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
};
__name(InvalidEndpointException, "InvalidEndpointException");
var ProvisionedThroughputExceededException = class extends DynamoDBServiceException {
  name = "ProvisionedThroughputExceededException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
  }
};
__name(ProvisionedThroughputExceededException, "ProvisionedThroughputExceededException");
var ResourceNotFoundException = class extends DynamoDBServiceException {
  name = "ResourceNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
};
__name(ResourceNotFoundException, "ResourceNotFoundException");
var ItemCollectionSizeLimitExceededException = class extends DynamoDBServiceException {
  name = "ItemCollectionSizeLimitExceededException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ItemCollectionSizeLimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ItemCollectionSizeLimitExceededException.prototype);
  }
};
__name(ItemCollectionSizeLimitExceededException, "ItemCollectionSizeLimitExceededException");
var ContinuousBackupsUnavailableException = class extends DynamoDBServiceException {
  name = "ContinuousBackupsUnavailableException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ContinuousBackupsUnavailableException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ContinuousBackupsUnavailableException.prototype);
  }
};
__name(ContinuousBackupsUnavailableException, "ContinuousBackupsUnavailableException");
var LimitExceededException = class extends DynamoDBServiceException {
  name = "LimitExceededException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
};
__name(LimitExceededException, "LimitExceededException");
var TableInUseException = class extends DynamoDBServiceException {
  name = "TableInUseException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TableInUseException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, TableInUseException.prototype);
  }
};
__name(TableInUseException, "TableInUseException");
var TableNotFoundException = class extends DynamoDBServiceException {
  name = "TableNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TableNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, TableNotFoundException.prototype);
  }
};
__name(TableNotFoundException, "TableNotFoundException");
var GlobalTableAlreadyExistsException = class extends DynamoDBServiceException {
  name = "GlobalTableAlreadyExistsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "GlobalTableAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, GlobalTableAlreadyExistsException.prototype);
  }
};
__name(GlobalTableAlreadyExistsException, "GlobalTableAlreadyExistsException");
var ResourceInUseException = class extends DynamoDBServiceException {
  name = "ResourceInUseException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
};
__name(ResourceInUseException, "ResourceInUseException");
var ReplicatedWriteConflictException = class extends DynamoDBServiceException {
  name = "ReplicatedWriteConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ReplicatedWriteConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ReplicatedWriteConflictException.prototype);
  }
};
__name(ReplicatedWriteConflictException, "ReplicatedWriteConflictException");
var TransactionConflictException = class extends DynamoDBServiceException {
  name = "TransactionConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TransactionConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, TransactionConflictException.prototype);
  }
};
__name(TransactionConflictException, "TransactionConflictException");
var PolicyNotFoundException = class extends DynamoDBServiceException {
  name = "PolicyNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
  }
};
__name(PolicyNotFoundException, "PolicyNotFoundException");
var ExportNotFoundException = class extends DynamoDBServiceException {
  name = "ExportNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ExportNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ExportNotFoundException.prototype);
  }
};
__name(ExportNotFoundException, "ExportNotFoundException");
var GlobalTableNotFoundException = class extends DynamoDBServiceException {
  name = "GlobalTableNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "GlobalTableNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, GlobalTableNotFoundException.prototype);
  }
};
__name(GlobalTableNotFoundException, "GlobalTableNotFoundException");
var ImportNotFoundException = class extends DynamoDBServiceException {
  name = "ImportNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ImportNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ImportNotFoundException.prototype);
  }
};
__name(ImportNotFoundException, "ImportNotFoundException");
var DuplicateItemException = class extends DynamoDBServiceException {
  name = "DuplicateItemException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "DuplicateItemException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, DuplicateItemException.prototype);
  }
};
__name(DuplicateItemException, "DuplicateItemException");
var IdempotentParameterMismatchException = class extends DynamoDBServiceException {
  name = "IdempotentParameterMismatchException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
};
__name(IdempotentParameterMismatchException, "IdempotentParameterMismatchException");
var TransactionInProgressException = class extends DynamoDBServiceException {
  name = "TransactionInProgressException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "TransactionInProgressException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, TransactionInProgressException.prototype);
    this.Message = opts.Message;
  }
};
__name(TransactionInProgressException, "TransactionInProgressException");
var ExportConflictException = class extends DynamoDBServiceException {
  name = "ExportConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ExportConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ExportConflictException.prototype);
  }
};
__name(ExportConflictException, "ExportConflictException");
var InvalidExportTimeException = class extends DynamoDBServiceException {
  name = "InvalidExportTimeException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidExportTimeException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, InvalidExportTimeException.prototype);
  }
};
__name(InvalidExportTimeException, "InvalidExportTimeException");
var PointInTimeRecoveryUnavailableException = class extends DynamoDBServiceException {
  name = "PointInTimeRecoveryUnavailableException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "PointInTimeRecoveryUnavailableException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, PointInTimeRecoveryUnavailableException.prototype);
  }
};
__name(PointInTimeRecoveryUnavailableException, "PointInTimeRecoveryUnavailableException");
var ImportConflictException = class extends DynamoDBServiceException {
  name = "ImportConflictException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ImportConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ImportConflictException.prototype);
  }
};
__name(ImportConflictException, "ImportConflictException");
var TableAlreadyExistsException = class extends DynamoDBServiceException {
  name = "TableAlreadyExistsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TableAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, TableAlreadyExistsException.prototype);
  }
};
__name(TableAlreadyExistsException, "TableAlreadyExistsException");
var InvalidRestoreTimeException = class extends DynamoDBServiceException {
  name = "InvalidRestoreTimeException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidRestoreTimeException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, InvalidRestoreTimeException.prototype);
  }
};
__name(InvalidRestoreTimeException, "InvalidRestoreTimeException");
var ReplicaAlreadyExistsException = class extends DynamoDBServiceException {
  name = "ReplicaAlreadyExistsException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ReplicaAlreadyExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ReplicaAlreadyExistsException.prototype);
  }
};
__name(ReplicaAlreadyExistsException, "ReplicaAlreadyExistsException");
var ReplicaNotFoundException = class extends DynamoDBServiceException {
  name = "ReplicaNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ReplicaNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ReplicaNotFoundException.prototype);
  }
};
__name(ReplicaNotFoundException, "ReplicaNotFoundException");
var IndexNotFoundException = class extends DynamoDBServiceException {
  name = "IndexNotFoundException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "IndexNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, IndexNotFoundException.prototype);
  }
};
__name(IndexNotFoundException, "IndexNotFoundException");
var AttributeValue;
(function(AttributeValue2) {
  AttributeValue2.visit = (value, visitor) => {
    if (value.S !== void 0)
      return visitor.S(value.S);
    if (value.N !== void 0)
      return visitor.N(value.N);
    if (value.B !== void 0)
      return visitor.B(value.B);
    if (value.SS !== void 0)
      return visitor.SS(value.SS);
    if (value.NS !== void 0)
      return visitor.NS(value.NS);
    if (value.BS !== void 0)
      return visitor.BS(value.BS);
    if (value.M !== void 0)
      return visitor.M(value.M);
    if (value.L !== void 0)
      return visitor.L(value.L);
    if (value.NULL !== void 0)
      return visitor.NULL(value.NULL);
    if (value.BOOL !== void 0)
      return visitor.BOOL(value.BOOL);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AttributeValue || (AttributeValue = {}));
var ConditionalCheckFailedException = class extends DynamoDBServiceException {
  name = "ConditionalCheckFailedException";
  $fault = "client";
  Item;
  constructor(opts) {
    super({
      name: "ConditionalCheckFailedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ConditionalCheckFailedException.prototype);
    this.Item = opts.Item;
  }
};
__name(ConditionalCheckFailedException, "ConditionalCheckFailedException");
var TransactionCanceledException = class extends DynamoDBServiceException {
  name = "TransactionCanceledException";
  $fault = "client";
  Message;
  CancellationReasons;
  constructor(opts) {
    super({
      name: "TransactionCanceledException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, TransactionCanceledException.prototype);
    this.Message = opts.Message;
    this.CancellationReasons = opts.CancellationReasons;
  }
};
__name(TransactionCanceledException, "TransactionCanceledException");

// node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
var se_BatchExecuteStatementCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("BatchExecuteStatement");
  let body;
  body = JSON.stringify(se_BatchExecuteStatementInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_BatchExecuteStatementCommand");
var se_BatchGetItemCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("BatchGetItem");
  let body;
  body = JSON.stringify(se_BatchGetItemInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_BatchGetItemCommand");
var se_BatchWriteItemCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("BatchWriteItem");
  let body;
  body = JSON.stringify(se_BatchWriteItemInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_BatchWriteItemCommand");
var se_DeleteItemCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("DeleteItem");
  let body;
  body = JSON.stringify(se_DeleteItemInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_DeleteItemCommand");
var se_DescribeEndpointsCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("DescribeEndpoints");
  let body;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_DescribeEndpointsCommand");
var se_ExecuteStatementCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("ExecuteStatement");
  let body;
  body = JSON.stringify(se_ExecuteStatementInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_ExecuteStatementCommand");
var se_ExecuteTransactionCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("ExecuteTransaction");
  let body;
  body = JSON.stringify(se_ExecuteTransactionInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_ExecuteTransactionCommand");
var se_GetItemCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("GetItem");
  let body;
  body = JSON.stringify(se_GetItemInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_GetItemCommand");
var se_PutItemCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("PutItem");
  let body;
  body = JSON.stringify(se_PutItemInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_PutItemCommand");
var se_QueryCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("Query");
  let body;
  body = JSON.stringify(se_QueryInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_QueryCommand");
var se_ScanCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("Scan");
  let body;
  body = JSON.stringify(se_ScanInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_ScanCommand");
var se_TransactGetItemsCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("TransactGetItems");
  let body;
  body = JSON.stringify(se_TransactGetItemsInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_TransactGetItemsCommand");
var se_TransactWriteItemsCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("TransactWriteItems");
  let body;
  body = JSON.stringify(se_TransactWriteItemsInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_TransactWriteItemsCommand");
var se_UpdateItemCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = sharedHeaders("UpdateItem");
  let body;
  body = JSON.stringify(se_UpdateItemInput(input, context2));
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_UpdateItemCommand");
var de_BatchExecuteStatementCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_BatchExecuteStatementOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_BatchExecuteStatementCommand");
var de_BatchGetItemCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_BatchGetItemOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_BatchGetItemCommand");
var de_BatchWriteItemCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_BatchWriteItemOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_BatchWriteItemCommand");
var de_DeleteItemCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_DeleteItemOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_DeleteItemCommand");
var de_DescribeEndpointsCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = _json(data);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_DescribeEndpointsCommand");
var de_ExecuteStatementCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_ExecuteStatementOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_ExecuteStatementCommand");
var de_ExecuteTransactionCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_ExecuteTransactionOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_ExecuteTransactionCommand");
var de_GetItemCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_GetItemOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_GetItemCommand");
var de_PutItemCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_PutItemOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_PutItemCommand");
var de_QueryCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_QueryOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_QueryCommand");
var de_ScanCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_ScanOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_ScanCommand");
var de_TransactGetItemsCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_TransactGetItemsOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_TransactGetItemsCommand");
var de_TransactWriteItemsCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_TransactWriteItemsOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_TransactWriteItemsCommand");
var de_UpdateItemCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseJsonBody(output.body, context2);
  let contents = {};
  contents = de_UpdateItemOutput(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_UpdateItemCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context2) => {
  const parsedOutput = {
    ...output,
    body: await parseJsonErrorBody(output.body, context2)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context2);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context2);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context2);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context2);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context2);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context2);
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      throw await de_BackupInUseExceptionRes(parsedOutput, context2);
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context2);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context2);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await de_TableInUseExceptionRes(parsedOutput, context2);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context2);
    case "GlobalTableAlreadyExistsException":
    case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
      throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context2);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context2);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await de_BackupNotFoundExceptionRes(parsedOutput, context2);
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context2);
    case "ReplicatedWriteConflictException":
    case "com.amazonaws.dynamodb#ReplicatedWriteConflictException":
      throw await de_ReplicatedWriteConflictExceptionRes(parsedOutput, context2);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context2);
    case "PolicyNotFoundException":
    case "com.amazonaws.dynamodb#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context2);
    case "ExportNotFoundException":
    case "com.amazonaws.dynamodb#ExportNotFoundException":
      throw await de_ExportNotFoundExceptionRes(parsedOutput, context2);
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context2);
    case "ImportNotFoundException":
    case "com.amazonaws.dynamodb#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context2);
    case "DuplicateItemException":
    case "com.amazonaws.dynamodb#DuplicateItemException":
      throw await de_DuplicateItemExceptionRes(parsedOutput, context2);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context2);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context2);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context2);
    case "ExportConflictException":
    case "com.amazonaws.dynamodb#ExportConflictException":
      throw await de_ExportConflictExceptionRes(parsedOutput, context2);
    case "InvalidExportTimeException":
    case "com.amazonaws.dynamodb#InvalidExportTimeException":
      throw await de_InvalidExportTimeExceptionRes(parsedOutput, context2);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context2);
    case "ImportConflictException":
    case "com.amazonaws.dynamodb#ImportConflictException":
      throw await de_ImportConflictExceptionRes(parsedOutput, context2);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context2);
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
      throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context2);
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
      throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context2);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context2);
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb#IndexNotFoundException":
      throw await de_IndexNotFoundExceptionRes(parsedOutput, context2);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CommandError");
var de_BackupInUseExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new BackupInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_BackupInUseExceptionRes");
var de_BackupNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new BackupNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_BackupNotFoundExceptionRes");
var de_ConditionalCheckFailedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_ConditionalCheckFailedException(body, context2);
  const exception = new ConditionalCheckFailedException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ConditionalCheckFailedExceptionRes");
var de_ContinuousBackupsUnavailableExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ContinuousBackupsUnavailableException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ContinuousBackupsUnavailableExceptionRes");
var de_DuplicateItemExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new DuplicateItemException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_DuplicateItemExceptionRes");
var de_ExportConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ExportConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ExportConflictExceptionRes");
var de_ExportNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ExportNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ExportNotFoundExceptionRes");
var de_GlobalTableAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new GlobalTableAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_GlobalTableAlreadyExistsExceptionRes");
var de_GlobalTableNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new GlobalTableNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_GlobalTableNotFoundExceptionRes");
var de_IdempotentParameterMismatchExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IdempotentParameterMismatchExceptionRes");
var de_ImportConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ImportConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ImportConflictExceptionRes");
var de_ImportNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ImportNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ImportNotFoundExceptionRes");
var de_IndexNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new IndexNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IndexNotFoundExceptionRes");
var de_InternalServerErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InternalServerErrorRes");
var de_InvalidEndpointExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidEndpointExceptionRes");
var de_InvalidExportTimeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidExportTimeException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidExportTimeExceptionRes");
var de_InvalidRestoreTimeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidRestoreTimeException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidRestoreTimeExceptionRes");
var de_ItemCollectionSizeLimitExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ItemCollectionSizeLimitExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ItemCollectionSizeLimitExceededExceptionRes");
var de_LimitExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_LimitExceededExceptionRes");
var de_PointInTimeRecoveryUnavailableExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new PointInTimeRecoveryUnavailableException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_PointInTimeRecoveryUnavailableExceptionRes");
var de_PolicyNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_PolicyNotFoundExceptionRes");
var de_ProvisionedThroughputExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ProvisionedThroughputExceededExceptionRes");
var de_ReplicaAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicaAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ReplicaAlreadyExistsExceptionRes");
var de_ReplicaNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicaNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ReplicaNotFoundExceptionRes");
var de_ReplicatedWriteConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ReplicatedWriteConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ReplicatedWriteConflictExceptionRes");
var de_RequestLimitExceededRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new RequestLimitExceeded({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_RequestLimitExceededRes");
var de_ResourceInUseExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ResourceInUseExceptionRes");
var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ResourceNotFoundExceptionRes");
var de_TableAlreadyExistsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableAlreadyExistsException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TableAlreadyExistsExceptionRes");
var de_TableInUseExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableInUseException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TableInUseExceptionRes");
var de_TableNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TableNotFoundException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TableNotFoundExceptionRes");
var de_TransactionCanceledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_TransactionCanceledException(body, context2);
  const exception = new TransactionCanceledException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TransactionCanceledExceptionRes");
var de_TransactionConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TransactionConflictException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TransactionConflictExceptionRes");
var de_TransactionInProgressExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_TransactionInProgressExceptionRes");
var se_AttributeUpdates = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValueUpdate(value, context2);
    return acc;
  }, {});
}, "se_AttributeUpdates");
var se_AttributeValue = /* @__PURE__ */ __name((input, context2) => {
  return AttributeValue.visit(input, {
    B: (value) => ({ B: context2.base64Encoder(value) }),
    BOOL: (value) => ({ BOOL: value }),
    BS: (value) => ({ BS: se_BinarySetAttributeValue(value, context2) }),
    L: (value) => ({ L: se_ListAttributeValue(value, context2) }),
    M: (value) => ({ M: se_MapAttributeValue(value, context2) }),
    N: (value) => ({ N: value }),
    NS: (value) => ({ NS: _json(value) }),
    NULL: (value) => ({ NULL: value }),
    S: (value) => ({ S: value }),
    SS: (value) => ({ SS: _json(value) }),
    _: (name, value) => ({ [name]: value })
  });
}, "se_AttributeValue");
var se_AttributeValueList = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_AttributeValue(entry, context2);
  });
}, "se_AttributeValueList");
var se_AttributeValueUpdate = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    Action: [],
    Value: (_) => se_AttributeValue(_, context2)
  });
}, "se_AttributeValueUpdate");
var se_BatchExecuteStatementInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ReturnConsumedCapacity: [],
    Statements: (_) => se_PartiQLBatchRequest(_, context2)
  });
}, "se_BatchExecuteStatementInput");
var se_BatchGetItemInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    RequestItems: (_) => se_BatchGetRequestMap(_, context2),
    ReturnConsumedCapacity: []
  });
}, "se_BatchGetItemInput");
var se_BatchGetRequestMap = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_KeysAndAttributes(value, context2);
    return acc;
  }, {});
}, "se_BatchGetRequestMap");
var se_BatchStatementRequest = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConsistentRead: [],
    Parameters: (_) => se_PreparedStatementParameters(_, context2),
    ReturnValuesOnConditionCheckFailure: [],
    Statement: []
  });
}, "se_BatchStatementRequest");
var se_BatchWriteItemInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    RequestItems: (_) => se_BatchWriteItemRequestMap(_, context2),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: []
  });
}, "se_BatchWriteItemInput");
var se_BatchWriteItemRequestMap = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_WriteRequests(value, context2);
    return acc;
  }, {});
}, "se_BatchWriteItemRequestMap");
var se_BinarySetAttributeValue = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return context2.base64Encoder(entry);
  });
}, "se_BinarySetAttributeValue");
var se_Condition = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context2),
    ComparisonOperator: []
  });
}, "se_Condition");
var se_ConditionCheck = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    Key: (_) => se_Key(_, context2),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: []
  });
}, "se_ConditionCheck");
var se_Delete = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    Key: (_) => se_Key(_, context2),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: []
  });
}, "se_Delete");
var se_DeleteItemInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: (_) => se_ExpectedAttributeMap(_, context2),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    Key: (_) => se_Key(_, context2),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: []
  });
}, "se_DeleteItemInput");
var se_DeleteRequest = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    Key: (_) => se_Key(_, context2)
  });
}, "se_DeleteRequest");
var se_ExecuteStatementInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConsistentRead: [],
    Limit: [],
    NextToken: [],
    Parameters: (_) => se_PreparedStatementParameters(_, context2),
    ReturnConsumedCapacity: [],
    ReturnValuesOnConditionCheckFailure: [],
    Statement: []
  });
}, "se_ExecuteStatementInput");
var se_ExecuteTransactionInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? v4_default()],
    ReturnConsumedCapacity: [],
    TransactStatements: (_) => se_ParameterizedStatements(_, context2)
  });
}, "se_ExecuteTransactionInput");
var se_ExpectedAttributeMap = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ExpectedAttributeValue(value, context2);
    return acc;
  }, {});
}, "se_ExpectedAttributeMap");
var se_ExpectedAttributeValue = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context2),
    ComparisonOperator: [],
    Exists: [],
    Value: (_) => se_AttributeValue(_, context2)
  });
}, "se_ExpectedAttributeValue");
var se_ExpressionAttributeValueMap = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context2);
    return acc;
  }, {});
}, "se_ExpressionAttributeValueMap");
var se_FilterConditionMap = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Condition(value, context2);
    return acc;
  }, {});
}, "se_FilterConditionMap");
var se_Get = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ExpressionAttributeNames: _json,
    Key: (_) => se_Key(_, context2),
    ProjectionExpression: [],
    TableName: []
  });
}, "se_Get");
var se_GetItemInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    AttributesToGet: _json,
    ConsistentRead: [],
    ExpressionAttributeNames: _json,
    Key: (_) => se_Key(_, context2),
    ProjectionExpression: [],
    ReturnConsumedCapacity: [],
    TableName: []
  });
}, "se_GetItemInput");
var se_Key = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context2);
    return acc;
  }, {});
}, "se_Key");
var se_KeyConditions = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Condition(value, context2);
    return acc;
  }, {});
}, "se_KeyConditions");
var se_KeyList = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_Key(entry, context2);
  });
}, "se_KeyList");
var se_KeysAndAttributes = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    AttributesToGet: _json,
    ConsistentRead: [],
    ExpressionAttributeNames: _json,
    Keys: (_) => se_KeyList(_, context2),
    ProjectionExpression: []
  });
}, "se_KeysAndAttributes");
var se_ListAttributeValue = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_AttributeValue(entry, context2);
  });
}, "se_ListAttributeValue");
var se_MapAttributeValue = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context2);
    return acc;
  }, {});
}, "se_MapAttributeValue");
var se_ParameterizedStatement = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    Parameters: (_) => se_PreparedStatementParameters(_, context2),
    ReturnValuesOnConditionCheckFailure: [],
    Statement: []
  });
}, "se_ParameterizedStatement");
var se_ParameterizedStatements = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_ParameterizedStatement(entry, context2);
  });
}, "se_ParameterizedStatements");
var se_PartiQLBatchRequest = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_BatchStatementRequest(entry, context2);
  });
}, "se_PartiQLBatchRequest");
var se_PreparedStatementParameters = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_AttributeValue(entry, context2);
  });
}, "se_PreparedStatementParameters");
var se_Put = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    Item: (_) => se_PutItemInputAttributeMap(_, context2),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: []
  });
}, "se_Put");
var se_PutItemInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: (_) => se_ExpectedAttributeMap(_, context2),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    Item: (_) => se_PutItemInputAttributeMap(_, context2),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: []
  });
}, "se_PutItemInput");
var se_PutItemInputAttributeMap = /* @__PURE__ */ __name((input, context2) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context2);
    return acc;
  }, {});
}, "se_PutItemInputAttributeMap");
var se_PutRequest = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    Item: (_) => se_PutItemInputAttributeMap(_, context2)
  });
}, "se_PutRequest");
var se_QueryInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    AttributesToGet: _json,
    ConditionalOperator: [],
    ConsistentRead: [],
    ExclusiveStartKey: (_) => se_Key(_, context2),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    FilterExpression: [],
    IndexName: [],
    KeyConditionExpression: [],
    KeyConditions: (_) => se_KeyConditions(_, context2),
    Limit: [],
    ProjectionExpression: [],
    QueryFilter: (_) => se_FilterConditionMap(_, context2),
    ReturnConsumedCapacity: [],
    ScanIndexForward: [],
    Select: [],
    TableName: []
  });
}, "se_QueryInput");
var se_ScanInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    AttributesToGet: _json,
    ConditionalOperator: [],
    ConsistentRead: [],
    ExclusiveStartKey: (_) => se_Key(_, context2),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    FilterExpression: [],
    IndexName: [],
    Limit: [],
    ProjectionExpression: [],
    ReturnConsumedCapacity: [],
    ScanFilter: (_) => se_FilterConditionMap(_, context2),
    Segment: [],
    Select: [],
    TableName: [],
    TotalSegments: []
  });
}, "se_ScanInput");
var se_TransactGetItem = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    Get: (_) => se_Get(_, context2)
  });
}, "se_TransactGetItem");
var se_TransactGetItemList = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_TransactGetItem(entry, context2);
  });
}, "se_TransactGetItemList");
var se_TransactGetItemsInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ReturnConsumedCapacity: [],
    TransactItems: (_) => se_TransactGetItemList(_, context2)
  });
}, "se_TransactGetItemsInput");
var se_TransactWriteItem = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConditionCheck: (_) => se_ConditionCheck(_, context2),
    Delete: (_) => se_Delete(_, context2),
    Put: (_) => se_Put(_, context2),
    Update: (_) => se_Update(_, context2)
  });
}, "se_TransactWriteItem");
var se_TransactWriteItemList = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_TransactWriteItem(entry, context2);
  });
}, "se_TransactWriteItemList");
var se_TransactWriteItemsInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? v4_default()],
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    TransactItems: (_) => se_TransactWriteItemList(_, context2)
  });
}, "se_TransactWriteItemsInput");
var se_Update = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    Key: (_) => se_Key(_, context2),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
    UpdateExpression: []
  });
}, "se_Update");
var se_UpdateItemInput = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    AttributeUpdates: (_) => se_AttributeUpdates(_, context2),
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: (_) => se_ExpectedAttributeMap(_, context2),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context2),
    Key: (_) => se_Key(_, context2),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
    UpdateExpression: []
  });
}, "se_UpdateItemInput");
var se_WriteRequest = /* @__PURE__ */ __name((input, context2) => {
  return take(input, {
    DeleteRequest: (_) => se_DeleteRequest(_, context2),
    PutRequest: (_) => se_PutRequest(_, context2)
  });
}, "se_WriteRequest");
var se_WriteRequests = /* @__PURE__ */ __name((input, context2) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    return se_WriteRequest(entry, context2);
  });
}, "se_WriteRequests");
var de_AttributeMap = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context2);
    return acc;
  }, {});
}, "de_AttributeMap");
var de_AttributeValue = /* @__PURE__ */ __name((output, context2) => {
  if (output.B != null) {
    return {
      B: context2.base64Decoder(output.B)
    };
  }
  if (expectBoolean(output.BOOL) !== void 0) {
    return { BOOL: expectBoolean(output.BOOL) };
  }
  if (output.BS != null) {
    return {
      BS: de_BinarySetAttributeValue(output.BS, context2)
    };
  }
  if (output.L != null) {
    return {
      L: de_ListAttributeValue(output.L, context2)
    };
  }
  if (output.M != null) {
    return {
      M: de_MapAttributeValue(output.M, context2)
    };
  }
  if (expectString(output.N) !== void 0) {
    return { N: expectString(output.N) };
  }
  if (output.NS != null) {
    return {
      NS: _json(output.NS)
    };
  }
  if (expectBoolean(output.NULL) !== void 0) {
    return { NULL: expectBoolean(output.NULL) };
  }
  if (expectString(output.S) !== void 0) {
    return { S: expectString(output.S) };
  }
  if (output.SS != null) {
    return {
      SS: _json(output.SS)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_AttributeValue");
var de_BatchExecuteStatementOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context2),
    Responses: (_) => de_PartiQLBatchResponse(_, context2)
  });
}, "de_BatchExecuteStatementOutput");
var de_BatchGetItemOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context2),
    Responses: (_) => de_BatchGetResponseMap(_, context2),
    UnprocessedKeys: (_) => de_BatchGetRequestMap(_, context2)
  });
}, "de_BatchGetItemOutput");
var de_BatchGetRequestMap = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_KeysAndAttributes(value, context2);
    return acc;
  }, {});
}, "de_BatchGetRequestMap");
var de_BatchGetResponseMap = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ItemList(value, context2);
    return acc;
  }, {});
}, "de_BatchGetResponseMap");
var de_BatchStatementError = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Code: expectString,
    Item: (_) => de_AttributeMap(_, context2),
    Message: expectString
  });
}, "de_BatchStatementError");
var de_BatchStatementResponse = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Error: (_) => de_BatchStatementError(_, context2),
    Item: (_) => de_AttributeMap(_, context2),
    TableName: expectString
  });
}, "de_BatchStatementResponse");
var de_BatchWriteItemOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context2),
    ItemCollectionMetrics: (_) => de_ItemCollectionMetricsPerTable(_, context2),
    UnprocessedItems: (_) => de_BatchWriteItemRequestMap(_, context2)
  });
}, "de_BatchWriteItemOutput");
var de_BatchWriteItemRequestMap = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_WriteRequests(value, context2);
    return acc;
  }, {});
}, "de_BatchWriteItemRequestMap");
var de_BinarySetAttributeValue = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return context2.base64Decoder(entry);
  });
  return retVal;
}, "de_BinarySetAttributeValue");
var de_CancellationReason = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Code: expectString,
    Item: (_) => de_AttributeMap(_, context2),
    Message: expectString
  });
}, "de_CancellationReason");
var de_CancellationReasonList = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_CancellationReason(entry, context2);
  });
  return retVal;
}, "de_CancellationReasonList");
var de_Capacity = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    ReadCapacityUnits: limitedParseDouble,
    WriteCapacityUnits: limitedParseDouble
  });
}, "de_Capacity");
var de_ConditionalCheckFailedException = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Item: (_) => de_AttributeMap(_, context2),
    message: expectString
  });
}, "de_ConditionalCheckFailedException");
var de_ConsumedCapacity = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    CapacityUnits: limitedParseDouble,
    GlobalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context2),
    LocalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context2),
    ReadCapacityUnits: limitedParseDouble,
    Table: (_) => de_Capacity(_, context2),
    TableName: expectString,
    WriteCapacityUnits: limitedParseDouble
  });
}, "de_ConsumedCapacity");
var de_ConsumedCapacityMultiple = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_ConsumedCapacity(entry, context2);
  });
  return retVal;
}, "de_ConsumedCapacityMultiple");
var de_DeleteItemOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Attributes: (_) => de_AttributeMap(_, context2),
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context2),
    ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context2)
  });
}, "de_DeleteItemOutput");
var de_DeleteRequest = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Key: (_) => de_Key(_, context2)
  });
}, "de_DeleteRequest");
var de_ExecuteStatementOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context2),
    Items: (_) => de_ItemList(_, context2),
    LastEvaluatedKey: (_) => de_Key(_, context2),
    NextToken: expectString
  });
}, "de_ExecuteStatementOutput");
var de_ExecuteTransactionOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context2),
    Responses: (_) => de_ItemResponseList(_, context2)
  });
}, "de_ExecuteTransactionOutput");
var de_GetItemOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context2),
    Item: (_) => de_AttributeMap(_, context2)
  });
}, "de_GetItemOutput");
var de_ItemCollectionKeyAttributeMap = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context2);
    return acc;
  }, {});
}, "de_ItemCollectionKeyAttributeMap");
var de_ItemCollectionMetrics = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ItemCollectionKey: (_) => de_ItemCollectionKeyAttributeMap(_, context2),
    SizeEstimateRangeGB: (_) => de_ItemCollectionSizeEstimateRange(_, context2)
  });
}, "de_ItemCollectionMetrics");
var de_ItemCollectionMetricsMultiple = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_ItemCollectionMetrics(entry, context2);
  });
  return retVal;
}, "de_ItemCollectionMetricsMultiple");
var de_ItemCollectionMetricsPerTable = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ItemCollectionMetricsMultiple(value, context2);
    return acc;
  }, {});
}, "de_ItemCollectionMetricsPerTable");
var de_ItemCollectionSizeEstimateRange = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return limitedParseDouble(entry);
  });
  return retVal;
}, "de_ItemCollectionSizeEstimateRange");
var de_ItemList = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_AttributeMap(entry, context2);
  });
  return retVal;
}, "de_ItemList");
var de_ItemResponse = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Item: (_) => de_AttributeMap(_, context2)
  });
}, "de_ItemResponse");
var de_ItemResponseList = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_ItemResponse(entry, context2);
  });
  return retVal;
}, "de_ItemResponseList");
var de_Key = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context2);
    return acc;
  }, {});
}, "de_Key");
var de_KeyList = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_Key(entry, context2);
  });
  return retVal;
}, "de_KeyList");
var de_KeysAndAttributes = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    AttributesToGet: _json,
    ConsistentRead: expectBoolean,
    ExpressionAttributeNames: _json,
    Keys: (_) => de_KeyList(_, context2),
    ProjectionExpression: expectString
  });
}, "de_KeysAndAttributes");
var de_ListAttributeValue = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_AttributeValue(awsExpectUnion(entry), context2);
  });
  return retVal;
}, "de_ListAttributeValue");
var de_MapAttributeValue = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context2);
    return acc;
  }, {});
}, "de_MapAttributeValue");
var de_PartiQLBatchResponse = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_BatchStatementResponse(entry, context2);
  });
  return retVal;
}, "de_PartiQLBatchResponse");
var de_PutItemInputAttributeMap = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(awsExpectUnion(value), context2);
    return acc;
  }, {});
}, "de_PutItemInputAttributeMap");
var de_PutItemOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Attributes: (_) => de_AttributeMap(_, context2),
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context2),
    ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context2)
  });
}, "de_PutItemOutput");
var de_PutRequest = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Item: (_) => de_PutItemInputAttributeMap(_, context2)
  });
}, "de_PutRequest");
var de_QueryOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context2),
    Count: expectInt32,
    Items: (_) => de_ItemList(_, context2),
    LastEvaluatedKey: (_) => de_Key(_, context2),
    ScannedCount: expectInt32
  });
}, "de_QueryOutput");
var de_ScanOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context2),
    Count: expectInt32,
    Items: (_) => de_ItemList(_, context2),
    LastEvaluatedKey: (_) => de_Key(_, context2),
    ScannedCount: expectInt32
  });
}, "de_ScanOutput");
var de_SecondaryIndexesCapacityMap = /* @__PURE__ */ __name((output, context2) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Capacity(value, context2);
    return acc;
  }, {});
}, "de_SecondaryIndexesCapacityMap");
var de_TransactGetItemsOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context2),
    Responses: (_) => de_ItemResponseList(_, context2)
  });
}, "de_TransactGetItemsOutput");
var de_TransactionCanceledException = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    CancellationReasons: (_) => de_CancellationReasonList(_, context2),
    Message: expectString
  });
}, "de_TransactionCanceledException");
var de_TransactWriteItemsOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context2),
    ItemCollectionMetrics: (_) => de_ItemCollectionMetricsPerTable(_, context2)
  });
}, "de_TransactWriteItemsOutput");
var de_UpdateItemOutput = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    Attributes: (_) => de_AttributeMap(_, context2),
    ConsumedCapacity: (_) => de_ConsumedCapacity(_, context2),
    ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context2)
  });
}, "de_UpdateItemOutput");
var de_WriteRequest = /* @__PURE__ */ __name((output, context2) => {
  return take(output, {
    DeleteRequest: (_) => de_DeleteRequest(_, context2),
    PutRequest: (_) => de_PutRequest(_, context2)
  });
}, "de_WriteRequest");
var de_WriteRequests = /* @__PURE__ */ __name((output, context2) => {
  const retVal = (output || []).filter((e2) => e2 != null).map((entry) => {
    return de_WriteRequest(entry, context2);
  });
  return retVal;
}, "de_WriteRequests");
var deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var throwDefaultError2 = withBaseException(DynamoDBServiceException);
var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context2, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context2.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest(contents);
}, "buildHttpRpcRequest");
function sharedHeaders(operation) {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `DynamoDB_20120810.${operation}`
  };
}
__name(sharedHeaders, "sharedHeaders");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
var DescribeEndpointsCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "DescribeEndpoints", {}).n("DynamoDBClient", "DescribeEndpointsCommand").f(void 0, void 0).ser(se_DescribeEndpointsCommand).de(de_DescribeEndpointsCommand).build() {
};
__name(DescribeEndpointsCommand, "DescribeEndpointsCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-dynamodb/package.json
var package_default = {
  name: "@aws-sdk/client-dynamodb",
  description: "AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",
  version: "3.797.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-dynamodb",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo dynamodb"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.796.0",
    "@aws-sdk/credential-provider-node": "3.797.0",
    "@aws-sdk/middleware-endpoint-discovery": "3.775.0",
    "@aws-sdk/middleware-host-header": "3.775.0",
    "@aws-sdk/middleware-logger": "3.775.0",
    "@aws-sdk/middleware-recursion-detection": "3.775.0",
    "@aws-sdk/middleware-user-agent": "3.796.0",
    "@aws-sdk/region-config-resolver": "3.775.0",
    "@aws-sdk/types": "3.775.0",
    "@aws-sdk/util-endpoints": "3.787.0",
    "@aws-sdk/util-user-agent-browser": "3.775.0",
    "@aws-sdk/util-user-agent-node": "3.796.0",
    "@smithy/config-resolver": "^4.1.0",
    "@smithy/core": "^3.2.0",
    "@smithy/fetch-http-handler": "^5.0.2",
    "@smithy/hash-node": "^4.0.2",
    "@smithy/invalid-dependency": "^4.0.2",
    "@smithy/middleware-content-length": "^4.0.2",
    "@smithy/middleware-endpoint": "^4.1.0",
    "@smithy/middleware-retry": "^4.1.0",
    "@smithy/middleware-serde": "^4.0.3",
    "@smithy/middleware-stack": "^4.0.2",
    "@smithy/node-config-provider": "^4.0.2",
    "@smithy/node-http-handler": "^4.0.4",
    "@smithy/protocol-http": "^5.1.0",
    "@smithy/smithy-client": "^4.2.0",
    "@smithy/types": "^4.2.0",
    "@smithy/url-parser": "^4.0.2",
    "@smithy/util-base64": "^4.0.0",
    "@smithy/util-body-length-browser": "^4.0.0",
    "@smithy/util-body-length-node": "^4.0.0",
    "@smithy/util-defaults-mode-browser": "^4.0.8",
    "@smithy/util-defaults-mode-node": "^4.0.8",
    "@smithy/util-endpoints": "^3.0.2",
    "@smithy/util-middleware": "^4.0.2",
    "@smithy/util-retry": "^4.0.2",
    "@smithy/util-utf8": "^4.0.0",
    "@smithy/util-waiter": "^4.0.3",
    "@types/uuid": "^9.0.1",
    tslib: "^2.6.2",
    uuid: "^9.0.1"
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.2.2"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-dynamodb"
  }
};

// node_modules/@aws-crypto/sha256-browser/build/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fromUtf82 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
  return Buffer.from(input, "utf8");
} : fromUtf82;
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf83(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}
__name(convertToBuffer, "convertToBuffer");

// node_modules/@aws-crypto/util/build/module/isEmptyData.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
__name(isEmptyData, "isEmptyData");

// node_modules/@aws-crypto/util/build/module/numToUint8.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-browser/build/module/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SHA_256_HASH = { name: "SHA-256" };
var SHA_256_HMAC_ALGO = {
  name: "HMAC",
  hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
  227,
  176,
  196,
  66,
  152,
  252,
  28,
  20,
  154,
  251,
  244,
  200,
  153,
  111,
  185,
  36,
  39,
  174,
  65,
  228,
  100,
  155,
  147,
  76,
  164,
  149,
  153,
  27,
  120,
  82,
  184,
  85
]);

// node_modules/@aws-sdk/util-locate-window/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fallbackWindow = {};
function locateWindow() {
  if (typeof window !== "undefined") {
    return window;
  } else if (typeof self !== "undefined") {
    return self;
  }
  return fallbackWindow;
}
__name(locateWindow, "locateWindow");

// node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
var Sha256 = (
  /** @class */
  function() {
    function Sha2564(secret) {
      this.toHash = new Uint8Array(0);
      this.secret = secret;
      this.reset();
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(data) {
      if (isEmptyData(data)) {
        return;
      }
      var update = convertToBuffer(data);
      var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
      typedArray.set(this.toHash, 0);
      typedArray.set(update, this.toHash.byteLength);
      this.toHash = typedArray;
    };
    Sha2564.prototype.digest = function() {
      var _this = this;
      if (this.key) {
        return this.key.then(function(key) {
          return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
            return new Uint8Array(data);
          });
        });
      }
      if (isEmptyData(this.toHash)) {
        return Promise.resolve(EMPTY_DATA_SHA_256);
      }
      return Promise.resolve().then(function() {
        return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
      }).then(function(data) {
        return Promise.resolve(new Uint8Array(data));
      });
    };
    Sha2564.prototype.reset = function() {
      var _this = this;
      this.toHash = new Uint8Array(0);
      if (this.secret && this.secret !== void 0) {
        this.key = new Promise(function(resolve, reject) {
          locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
        });
        this.key.catch(function() {
        });
      }
    };
    return Sha2564;
  }()
);

// node_modules/@aws-crypto/sha256-js/build/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/tslib/tslib.es6.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter, "__awaiter");
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
__name(__generator, "__generator");

// node_modules/@aws-crypto/sha256-js/build/module/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var INIT = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

// node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RawSha256 = (
  /** @class */
  function() {
    function RawSha2562() {
      this.state = Int32Array.from(INIT);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
    __name(RawSha2562, "RawSha256");
    RawSha2562.prototype.update = function(data) {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      }
      while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    };
    RawSha2562.prototype.digest = function() {
      if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 128);
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
          for (var i2 = this.bufferLength; i2 < BLOCK_SIZE; i2++) {
            bufferView.setUint8(i2, 0);
          }
          this.hashBuffer();
          this.bufferLength = 0;
        }
        for (var i2 = this.bufferLength; i2 < BLOCK_SIZE - 8; i2++) {
          bufferView.setUint8(i2, 0);
        }
        bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
        bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
      }
      var out = new Uint8Array(DIGEST_LENGTH);
      for (var i2 = 0; i2 < 8; i2++) {
        out[i2 * 4] = this.state[i2] >>> 24 & 255;
        out[i2 * 4 + 1] = this.state[i2] >>> 16 & 255;
        out[i2 * 4 + 2] = this.state[i2] >>> 8 & 255;
        out[i2 * 4 + 3] = this.state[i2] >>> 0 & 255;
      }
      return out;
    };
    RawSha2562.prototype.hashBuffer = function() {
      var _a = this, buffer = _a.buffer, state = _a.state;
      var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
      for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
        if (i2 < 16) {
          this.temp[i2] = (buffer[i2 * 4] & 255) << 24 | (buffer[i2 * 4 + 1] & 255) << 16 | (buffer[i2 * 4 + 2] & 255) << 8 | buffer[i2 * 4 + 3] & 255;
        } else {
          var u2 = this.temp[i2 - 2];
          var t1_1 = (u2 >>> 17 | u2 << 15) ^ (u2 >>> 19 | u2 << 13) ^ u2 >>> 10;
          u2 = this.temp[i2 - 15];
          var t2_1 = (u2 >>> 7 | u2 << 25) ^ (u2 >>> 18 | u2 << 14) ^ u2 >>> 3;
          this.temp[i2] = (t1_1 + this.temp[i2 - 7] | 0) + (t2_1 + this.temp[i2 - 16] | 0);
        }
        var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i2] + this.temp[i2] | 0) | 0) | 0;
        var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = state3 + t1 | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = t1 + t2 | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
    };
    return RawSha2562;
  }()
);

// node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
var Sha2562 = (
  /** @class */
  function() {
    function Sha2564(secret) {
      this.secret = secret;
      this.hash = new RawSha256();
      this.reset();
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(toHash) {
      if (isEmptyData(toHash) || this.error) {
        return;
      }
      try {
        this.hash.update(convertToBuffer(toHash));
      } catch (e2) {
        this.error = e2;
      }
    };
    Sha2564.prototype.digestSync = function() {
      if (this.error) {
        throw this.error;
      }
      if (this.outer) {
        if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
        }
        return this.outer.digest();
      }
      return this.hash.digest();
    };
    Sha2564.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.digestSync()];
        });
      });
    };
    Sha2564.prototype.reset = function() {
      this.hash = new RawSha256();
      if (this.secret) {
        this.outer = new RawSha256();
        var inner = bufferFromSecret(this.secret);
        var outer = new Uint8Array(BLOCK_SIZE);
        outer.set(inner);
        for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
          inner[i2] ^= 54;
          outer[i2] ^= 92;
        }
        this.hash.update(inner);
        this.outer.update(outer);
        for (var i2 = 0; i2 < inner.byteLength; i2++) {
          inner[i2] = 0;
        }
      }
    };
    return Sha2564;
  }()
);
function bufferFromSecret(secret) {
  var input = convertToBuffer(secret);
  if (input.byteLength > BLOCK_SIZE) {
    var bufferHash = new RawSha256();
    bufferHash.update(input);
    input = bufferHash.digest();
  }
  var buffer = new Uint8Array(BLOCK_SIZE);
  buffer.set(input);
  return buffer;
}
__name(bufferFromSecret, "bufferFromSecret");

// node_modules/@aws-crypto/supports-web-crypto/build/module/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var subtleCryptoMethods = [
  "decrypt",
  "digest",
  "encrypt",
  "exportKey",
  "generateKey",
  "importKey",
  "sign",
  "verify"
];
function supportsWebCrypto(window2) {
  if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
    var subtle = window2.crypto.subtle;
    return supportsSubtleCrypto(subtle);
  }
  return false;
}
__name(supportsWebCrypto, "supportsWebCrypto");
function supportsSecureRandom(window2) {
  if (typeof window2 === "object" && typeof window2.crypto === "object") {
    var getRandomValues2 = window2.crypto.getRandomValues;
    return typeof getRandomValues2 === "function";
  }
  return false;
}
__name(supportsSecureRandom, "supportsSecureRandom");
function supportsSubtleCrypto(subtle) {
  return subtle && subtleCryptoMethods.every(function(methodName) {
    return typeof subtle[methodName] === "function";
  });
}
__name(supportsSubtleCrypto, "supportsSubtleCrypto");

// node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
var Sha2563 = (
  /** @class */
  function() {
    function Sha2564(secret) {
      if (supportsWebCrypto(locateWindow())) {
        this.hash = new Sha256(secret);
      } else {
        this.hash = new Sha2562(secret);
      }
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(data, encoding) {
      this.hash.update(convertToBuffer(data));
    };
    Sha2564.prototype.digest = function() {
      return this.hash.digest();
    };
    Sha2564.prototype.reset = function() {
      this.hash.reset();
    };
    return Sha2564;
  }()
);

// node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_bowser = __toESM(require_es5());
var createDefaultUserAgentProvider = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => async (config2) => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.1"],
    [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
    ["lang/js"],
    ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
  ];
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  const appId = await config2?.userAgentAppId?.();
  if (appId) {
    sections.push([`app/${appId}`]);
  }
  return sections;
}, "createDefaultUserAgentProvider");

// node_modules/@smithy/invalid-dependency/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var invalidProvider = /* @__PURE__ */ __name((message) => () => Promise.reject(message), "invalidProvider");

// node_modules/@smithy/util-body-length-browser/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
var calculateBodyLength = /* @__PURE__ */ __name((body) => {
  if (typeof body === "string") {
    if (TEXT_ENCODER) {
      return TEXT_ENCODER.encode(body).byteLength;
    }
    let len = body.length;
    for (let i2 = len - 1; i2 >= 0; i2--) {
      const code = body.charCodeAt(i2);
      if (code > 127 && code <= 2047)
        len++;
      else if (code > 2047 && code <= 65535)
        len += 2;
      if (code >= 56320 && code <= 57343)
        i2--;
    }
    return len;
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
}, "calculateBodyLength");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var S = "required";
var T = "type";
var U = "fn";
var V = "argv";
var W = "ref";
var X = "properties";
var Y = "headers";
var a = false;
var b = "isSet";
var c = "error";
var d = "endpoint";
var e = "tree";
var f = "PartitionResult";
var g = "stringEquals";
var h = "dynamodb";
var i = "getAttr";
var j = "aws.parseArn";
var k = "ParsedArn";
var l = "isValidHostLabel";
var m = "FirstArn";
var n = { [S]: false, [T]: "String" };
var o = { [S]: true, "default": false, [T]: "Boolean" };
var p = { [U]: "booleanEquals", [V]: [{ [W]: "UseFIPS" }, true] };
var q = { [U]: "booleanEquals", [V]: [{ [W]: "UseDualStack" }, true] };
var r = {};
var s = { [W]: "Region" };
var t = { [U]: "booleanEquals", [V]: [{ [U]: i, [V]: [{ [W]: f }, "supportsFIPS"] }, true] };
var u = { [U]: "booleanEquals", [V]: [{ [U]: i, [V]: [{ [W]: f }, "supportsDualStack"] }, true] };
var v = { "conditions": [{ [U]: b, [V]: [{ [W]: "AccountIdEndpointMode" }] }, { [U]: g, [V]: [{ [W]: "AccountIdEndpointMode" }, "required"] }], "rules": [{ [c]: "Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported", [T]: c }], [T]: e };
var w = { [U]: b, [V]: [{ [W]: "AccountIdEndpointMode" }] };
var x = { [c]: "Invalid Configuration: AccountIdEndpointMode is required and FIPS is enabled, but FIPS account endpoints are not supported", [T]: c };
var y = { [U]: i, [V]: [{ [W]: f }, "name"] };
var z = { [d]: { "url": "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", [X]: {}, [Y]: {} }, [T]: d };
var A = { [U]: "not", [V]: [p] };
var B = { [c]: "Invalid Configuration: AccountIdEndpointMode is required and DualStack is enabled, but DualStack account endpoints are not supported", [T]: c };
var C = { [U]: "not", [V]: [{ [U]: g, [V]: [{ [W]: "AccountIdEndpointMode" }, "disabled"] }] };
var D = { [U]: g, [V]: [y, "aws"] };
var E = { [U]: "not", [V]: [q] };
var F = { [U]: g, [V]: [{ [U]: i, [V]: [{ [W]: k }, "service"] }, h] };
var G = { [U]: l, [V]: [{ [U]: i, [V]: [{ [W]: k }, "region"] }, false] };
var H = { [U]: g, [V]: [{ [U]: i, [V]: [{ [W]: k }, "region"] }, "{Region}"] };
var I = { [U]: l, [V]: [{ [U]: i, [V]: [{ [W]: k }, "accountId"] }, false] };
var J = { "url": "https://{ParsedArn#accountId}.ddb.{Region}.{PartitionResult#dnsSuffix}", [X]: {}, [Y]: {} };
var K = { [W]: "ResourceArnList" };
var L = { [W]: "AccountId" };
var M = [p];
var N = [q];
var O = [s];
var P = [w, { [U]: g, [V]: [{ [W]: "AccountIdEndpointMode" }, "required"] }];
var Q = [A];
var R = [{ [W]: "ResourceArn" }];
var _data = { version: "1.0", parameters: { Region: n, UseDualStack: o, UseFIPS: o, Endpoint: n, AccountId: n, AccountIdEndpointMode: n, ResourceArn: n, ResourceArnList: { [S]: a, [T]: "stringArray" } }, rules: [{ conditions: [{ [U]: b, [V]: [{ [W]: "Endpoint" }] }], rules: [{ conditions: M, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [T]: c }, { conditions: N, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [T]: c }, { endpoint: { url: "{Endpoint}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { conditions: [{ [U]: b, [V]: O }], rules: [{ conditions: [{ [U]: "aws.partition", [V]: O, assign: f }], rules: [{ conditions: [{ [U]: g, [V]: [s, "local"] }], rules: [{ conditions: M, error: "Invalid Configuration: FIPS and local endpoint are not supported", [T]: c }, { conditions: N, error: "Invalid Configuration: Dualstack and local endpoint are not supported", [T]: c }, { endpoint: { url: "http://localhost:8000", [X]: { authSchemes: [{ signingRegion: "us-east-1", signingName: h, name: "sigv4" }] }, [Y]: r }, [T]: d }], [T]: e }, { conditions: [p, q], rules: [{ conditions: [t, u], rules: [v, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [T]: c }], [T]: e }, { conditions: M, rules: [{ conditions: [t], rules: [{ conditions: [{ [U]: g, [V]: [y, "aws-us-gov"] }], rules: [v, z], [T]: e }, v, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "FIPS is enabled but this partition does not support FIPS", [T]: c }], [T]: e }, { conditions: N, rules: [{ conditions: [u], rules: [{ conditions: P, rules: [{ conditions: Q, rules: [B], [T]: e }, x], [T]: e }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "DualStack is enabled but this partition does not support DualStack", [T]: c }], [T]: e }, { conditions: [w, C, D, A, E, { [U]: b, [V]: R }, { [U]: j, [V]: R, assign: k }, F, G, H, I], endpoint: J, [T]: d }, { conditions: [w, C, D, A, E, { [U]: b, [V]: [K] }, { [U]: i, [V]: [K, "[0]"], assign: m }, { [U]: j, [V]: [{ [W]: m }], assign: k }, F, G, H, I], endpoint: J, [T]: d }, { conditions: [w, C, D, A, E, { [U]: b, [V]: [L] }], rules: [{ conditions: [{ [U]: l, [V]: [L, a] }], rules: [{ endpoint: { url: "https://{AccountId}.ddb.{Region}.{PartitionResult#dnsSuffix}", [X]: r, [Y]: r }, [T]: d }], [T]: e }, { error: "Credentials-sourced account ID parameter is invalid", [T]: c }], [T]: e }, { conditions: P, rules: [{ conditions: Q, rules: [{ conditions: [E], rules: [{ conditions: [D], rules: [{ error: "AccountIdEndpointMode is required but no AccountID was provided or able to be loaded", [T]: c }], [T]: e }, { error: "Invalid Configuration: AccountIdEndpointMode is required but account endpoints are not supported in this partition", [T]: c }], [T]: e }, B], [T]: e }, x], [T]: e }, z], [T]: e }], [T]: e }, { error: "Invalid Configuration: Missing Region", [T]: c }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache2({
  size: 50,
  params: [
    "AccountId",
    "AccountIdEndpointMode",
    "Endpoint",
    "Region",
    "ResourceArn",
    "ResourceArnList",
    "UseDualStack",
    "UseFIPS"
  ]
});
var defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context2 = {}) => {
  return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context2.logger
  }));
}, "defaultEndpointResolver");
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return {
    apiVersion: "2012-08-10",
    base64Decoder: config2?.base64Decoder ?? fromBase64,
    base64Encoder: config2?.base64Encoder ?? toBase64,
    disableHostPrefix: config2?.disableHostPrefix ?? false,
    endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver,
    extensions: config2?.extensions ?? [],
    httpAuthSchemeProvider: config2?.httpAuthSchemeProvider ?? defaultDynamoDBHttpAuthSchemeProvider,
    httpAuthSchemes: config2?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer()
      }
    ],
    logger: config2?.logger ?? new NoOpLogger(),
    serviceId: config2?.serviceId ?? "DynamoDB",
    urlParser: config2?.urlParser ?? parseUrl,
    utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config2?.utf8Encoder ?? toUtf8
  };
}, "getRuntimeConfig");

// node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_bowser2 = __toESM(require_es5());

// node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

// node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ defaultsMode } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
}), "resolveDefaultsModeConfig");
var isMobileBrowser = /* @__PURE__ */ __name(() => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser2.default.parse(window.navigator.userAgent) : void 0;
  const platform2 = parsedUA?.platform?.type;
  return platform2 === "tablet" || platform2 === "mobile";
}, "isMobileBrowser");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.browser.js
var getRuntimeConfig2 = /* @__PURE__ */ __name((config2) => {
  const defaultsMode = resolveDefaultsModeConfig(config2);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig(config2);
  return {
    ...clientSharedValues,
    ...config2,
    runtime: "browser",
    defaultsMode,
    accountIdEndpointMode: config2?.accountIdEndpointMode ?? (() => Promise.resolve(DEFAULT_ACCOUNT_ID_ENDPOINT_MODE)),
    bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config2?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    endpointDiscoveryEnabledProvider: config2?.endpointDiscoveryEnabledProvider ?? (() => Promise.resolve(void 0)),
    maxAttempts: config2?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config2?.region ?? invalidProvider("Region is missing"),
    requestHandler: FetchHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
    retryMode: config2?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config2?.sha256 ?? Sha2563,
    streamCollector: config2?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config2?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config2?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setRegion(region) {
      runtimeConfig.region = region;
    },
    region() {
      return runtimeConfig.region;
    }
  };
}, "getAwsRegionExtensionConfiguration");
var resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
  return {
    region: awsRegionExtensionConfiguration.region()
  };
}, "resolveAwsRegionExtensionConfiguration");

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthExtensionConfiguration.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return {
    httpAuthSchemes: config2.httpAuthSchemes(),
    httpAuthSchemeProvider: config2.httpAuthSchemeProvider(),
    credentials: config2.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
}, "resolveRuntimeExtensions");

// node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
var DynamoDBClient = class extends Client {
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveAccountIdEndpointModeConfig(_config_1);
    const _config_3 = resolveUserAgentConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveEndpointDiscoveryConfig(_config_8, {
      endpointDiscoveryCommandCtor: DescribeEndpointsCommand
    });
    const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
    this.config = _config_10;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultDynamoDBHttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: async (config2) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config2.credentials
      })
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(DynamoDBClient, "DynamoDBClient");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchExecuteStatementCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BatchExecuteStatementCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "BatchExecuteStatement", {}).n("DynamoDBClient", "BatchExecuteStatementCommand").f(void 0, void 0).ser(se_BatchExecuteStatementCommand).de(de_BatchExecuteStatementCommand).build() {
};
__name(BatchExecuteStatementCommand, "BatchExecuteStatementCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchGetItemCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BatchGetItemCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArnList: { type: "operationContextParams", get: (input) => Object.keys(input?.RequestItems ?? {}) }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "BatchGetItem", {}).n("DynamoDBClient", "BatchGetItemCommand").f(void 0, void 0).ser(se_BatchGetItemCommand).de(de_BatchGetItemCommand).build() {
};
__name(BatchGetItemCommand, "BatchGetItemCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchWriteItemCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BatchWriteItemCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArnList: { type: "operationContextParams", get: (input) => Object.keys(input?.RequestItems ?? {}) }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "BatchWriteItem", {}).n("DynamoDBClient", "BatchWriteItemCommand").f(void 0, void 0).ser(se_BatchWriteItemCommand).de(de_BatchWriteItemCommand).build() {
};
__name(BatchWriteItemCommand, "BatchWriteItemCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteItemCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DeleteItemCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "DeleteItem", {}).n("DynamoDBClient", "DeleteItemCommand").f(void 0, void 0).ser(se_DeleteItemCommand).de(de_DeleteItemCommand).build() {
};
__name(DeleteItemCommand, "DeleteItemCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteStatementCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ExecuteStatementCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "ExecuteStatement", {}).n("DynamoDBClient", "ExecuteStatementCommand").f(void 0, void 0).ser(se_ExecuteStatementCommand).de(de_ExecuteStatementCommand).build() {
};
__name(ExecuteStatementCommand, "ExecuteStatementCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteTransactionCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ExecuteTransactionCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "ExecuteTransaction", {}).n("DynamoDBClient", "ExecuteTransactionCommand").f(void 0, void 0).ser(se_ExecuteTransactionCommand).de(de_ExecuteTransactionCommand).build() {
};
__name(ExecuteTransactionCommand, "ExecuteTransactionCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/GetItemCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GetItemCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "GetItem", {}).n("DynamoDBClient", "GetItemCommand").f(void 0, void 0).ser(se_GetItemCommand).de(de_GetItemCommand).build() {
};
__name(GetItemCommand, "GetItemCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/PutItemCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PutItemCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "PutItem", {}).n("DynamoDBClient", "PutItemCommand").f(void 0, void 0).ser(se_PutItemCommand).de(de_PutItemCommand).build() {
};
__name(PutItemCommand, "PutItemCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var QueryCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "Query", {}).n("DynamoDBClient", "QueryCommand").f(void 0, void 0).ser(se_QueryCommand).de(de_QueryCommand).build() {
};
__name(QueryCommand, "QueryCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ScanCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ScanCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "Scan", {}).n("DynamoDBClient", "ScanCommand").f(void 0, void 0).ser(se_ScanCommand).de(de_ScanCommand).build() {
};
__name(ScanCommand, "ScanCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactGetItemsCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TransactGetItemsCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArnList: {
    type: "operationContextParams",
    get: (input) => input?.TransactItems?.map((obj) => obj?.Get?.TableName)
  }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "TransactGetItems", {}).n("DynamoDBClient", "TransactGetItemsCommand").f(void 0, void 0).ser(se_TransactGetItemsCommand).de(de_TransactGetItemsCommand).build() {
};
__name(TransactGetItemsCommand, "TransactGetItemsCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactWriteItemsCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TransactWriteItemsCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArnList: {
    type: "operationContextParams",
    get: (input) => input?.TransactItems?.map((obj) => [obj?.ConditionCheck?.TableName, obj?.Put?.TableName, obj?.Delete?.TableName, obj?.Update?.TableName].filter((i2) => i2)).flat()
  }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "TransactWriteItems", {}).n("DynamoDBClient", "TransactWriteItemsCommand").f(void 0, void 0).ser(se_TransactWriteItemsCommand).de(de_TransactWriteItemsCommand).build() {
};
__name(TransactWriteItemsCommand, "TransactWriteItemsCommand");

// node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateItemCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var UpdateItemCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  ResourceArn: { type: "contextParams", name: "TableName" }
}).m(function(Command2, cs, config2, o2) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("DynamoDB_20120810", "UpdateItem", {}).n("DynamoDBClient", "UpdateItemCommand").f(void 0, void 0).ser(se_UpdateItemCommand).de(de_UpdateItemCommand).build() {
};
__name(UpdateItemCommand, "UpdateItemCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/lib-dynamodb/dist-es/DynamoDBDocument.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/BatchExecuteStatementCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/lib-dynamodb/dist-es/baseCommand/DynamoDBDocumentClientCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/utils.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-dynamodb/dist-es/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-dynamodb/dist-es/NumberValue.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var NumberValue = class {
  value;
  constructor(value) {
    if (typeof value === "object" && "N" in value) {
      this.value = String(value.N);
    } else {
      this.value = String(value);
    }
    const valueOf = typeof value.valueOf() === "number" ? value.valueOf() : 0;
    const imprecise = valueOf > Number.MAX_SAFE_INTEGER || valueOf < Number.MIN_SAFE_INTEGER || Math.abs(valueOf) === Infinity || Number.isNaN(valueOf);
    if (imprecise) {
      throw new Error(`NumberValue should not be initialized with an imprecise number=${valueOf}. Use a string instead.`);
    }
  }
  static from(value) {
    return new NumberValue(value);
  }
  toAttributeValue() {
    return {
      N: this.toString()
    };
  }
  toBigInt() {
    const stringValue = this.toString();
    return BigInt(stringValue);
  }
  toString() {
    return String(this.value);
  }
  valueOf() {
    return this.toString();
  }
};
__name(NumberValue, "NumberValue");

// node_modules/@aws-sdk/util-dynamodb/dist-es/convertToAttr.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var convertToAttr = /* @__PURE__ */ __name((data, options) => {
  if (data === void 0) {
    throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
  } else if (data === null && typeof data === "object") {
    return convertToNullAttr();
  } else if (Array.isArray(data)) {
    return convertToListAttr(data, options);
  } else if (data?.constructor?.name === "Set") {
    return convertToSetAttr(data, options);
  } else if (data?.constructor?.name === "Map") {
    return convertToMapAttrFromIterable(data, options);
  } else if (data?.constructor?.name === "Object" || !data.constructor && typeof data === "object") {
    return convertToMapAttrFromEnumerableProps(data, options);
  } else if (isBinary(data)) {
    if (data.length === 0 && options?.convertEmptyValues) {
      return convertToNullAttr();
    }
    return convertToBinaryAttr(data);
  } else if (typeof data === "boolean" || data?.constructor?.name === "Boolean") {
    return { BOOL: data.valueOf() };
  } else if (typeof data === "number" || data?.constructor?.name === "Number") {
    return convertToNumberAttr(data, options);
  } else if (data instanceof NumberValue) {
    return data.toAttributeValue();
  } else if (typeof data === "bigint") {
    return convertToBigIntAttr(data);
  } else if (typeof data === "string" || data?.constructor?.name === "String") {
    if (data.length === 0 && options?.convertEmptyValues) {
      return convertToNullAttr();
    }
    return convertToStringAttr(data);
  } else if (options?.convertClassInstanceToMap && typeof data === "object") {
    return convertToMapAttrFromEnumerableProps(data, options);
  }
  throw new Error(`Unsupported type passed: ${data}. Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute.`);
}, "convertToAttr");
var convertToListAttr = /* @__PURE__ */ __name((data, options) => ({
  L: data.filter((item) => typeof item !== "function" && (!options?.removeUndefinedValues || options?.removeUndefinedValues && item !== void 0)).map((item) => convertToAttr(item, options))
}), "convertToListAttr");
var convertToSetAttr = /* @__PURE__ */ __name((set, options) => {
  const setToOperate = options?.removeUndefinedValues ? new Set([...set].filter((value) => value !== void 0)) : set;
  if (!options?.removeUndefinedValues && setToOperate.has(void 0)) {
    throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
  }
  if (setToOperate.size === 0) {
    if (options?.convertEmptyValues) {
      return convertToNullAttr();
    }
    throw new Error(`Pass a non-empty set, or options.convertEmptyValues=true.`);
  }
  const item = setToOperate.values().next().value;
  if (item instanceof NumberValue) {
    return {
      NS: Array.from(setToOperate).map((_) => _.toString())
    };
  } else if (typeof item === "number") {
    return {
      NS: Array.from(setToOperate).map((num) => convertToNumberAttr(num, options)).map((item2) => item2.N)
    };
  } else if (typeof item === "bigint") {
    return {
      NS: Array.from(setToOperate).map(convertToBigIntAttr).map((item2) => item2.N)
    };
  } else if (typeof item === "string") {
    return {
      SS: Array.from(setToOperate).map(convertToStringAttr).map((item2) => item2.S)
    };
  } else if (isBinary(item)) {
    return {
      BS: Array.from(setToOperate).map(convertToBinaryAttr).map((item2) => item2.B)
    };
  } else {
    throw new Error(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
  }
}, "convertToSetAttr");
var convertToMapAttrFromIterable = /* @__PURE__ */ __name((data, options) => ({
  M: ((data2) => {
    const map = {};
    for (const [key, value] of data2) {
      if (typeof value !== "function" && (value !== void 0 || !options?.removeUndefinedValues)) {
        map[key] = convertToAttr(value, options);
      }
    }
    return map;
  })(data)
}), "convertToMapAttrFromIterable");
var convertToMapAttrFromEnumerableProps = /* @__PURE__ */ __name((data, options) => ({
  M: ((data2) => {
    const map = {};
    for (const key in data2) {
      const value = data2[key];
      if (typeof value !== "function" && (value !== void 0 || !options?.removeUndefinedValues)) {
        map[key] = convertToAttr(value, options);
      }
    }
    return map;
  })(data)
}), "convertToMapAttrFromEnumerableProps");
var convertToNullAttr = /* @__PURE__ */ __name(() => ({ NULL: true }), "convertToNullAttr");
var convertToBinaryAttr = /* @__PURE__ */ __name((data) => ({ B: data }), "convertToBinaryAttr");
var convertToStringAttr = /* @__PURE__ */ __name((data) => ({ S: data.toString() }), "convertToStringAttr");
var convertToBigIntAttr = /* @__PURE__ */ __name((data) => ({ N: data.toString() }), "convertToBigIntAttr");
var validateBigIntAndThrow = /* @__PURE__ */ __name((errorPrefix) => {
  throw new Error(`${errorPrefix} Use NumberValue from @aws-sdk/lib-dynamodb.`);
}, "validateBigIntAndThrow");
var convertToNumberAttr = /* @__PURE__ */ __name((num, options) => {
  if ([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].map((val) => val.toString()).includes(num.toString())) {
    throw new Error(`Special numeric value ${num.toString()} is not allowed`);
  } else if (!options?.allowImpreciseNumbers) {
    if (Number(num) > Number.MAX_SAFE_INTEGER) {
      validateBigIntAndThrow(`Number ${num.toString()} is greater than Number.MAX_SAFE_INTEGER.`);
    } else if (Number(num) < Number.MIN_SAFE_INTEGER) {
      validateBigIntAndThrow(`Number ${num.toString()} is lesser than Number.MIN_SAFE_INTEGER.`);
    }
  }
  return { N: num.toString() };
}, "convertToNumberAttr");
var isBinary = /* @__PURE__ */ __name((data) => {
  const binaryTypes = [
    "ArrayBuffer",
    "Blob",
    "Buffer",
    "DataView",
    "File",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  if (data?.constructor) {
    return binaryTypes.includes(data.constructor.name);
  }
  return false;
}, "isBinary");

// node_modules/@aws-sdk/util-dynamodb/dist-es/convertToNative.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var convertToNative = /* @__PURE__ */ __name((data, options) => {
  for (const [key, value] of Object.entries(data)) {
    if (value !== void 0) {
      switch (key) {
        case "NULL":
          return null;
        case "BOOL":
          return Boolean(value);
        case "N":
          return convertNumber(value, options);
        case "B":
          return convertBinary(value);
        case "S":
          return convertString(value);
        case "L":
          return convertList(value, options);
        case "M":
          return convertMap(value, options);
        case "NS":
          return new Set(value.map((item) => convertNumber(item, options)));
        case "BS":
          return new Set(value.map(convertBinary));
        case "SS":
          return new Set(value.map(convertString));
        default:
          throw new Error(`Unsupported type passed: ${key}`);
      }
    }
  }
  throw new Error(`No value defined: ${JSON.stringify(data)}`);
}, "convertToNative");
var convertNumber = /* @__PURE__ */ __name((numString, options) => {
  if (typeof options?.wrapNumbers === "function") {
    return options?.wrapNumbers(numString);
  }
  if (options?.wrapNumbers) {
    return NumberValue.from(numString);
  }
  const num = Number(numString);
  const infinityValues = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  const isLargeFiniteNumber = (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) && !infinityValues.includes(num);
  if (isLargeFiniteNumber) {
    if (typeof BigInt === "function") {
      try {
        return BigInt(numString);
      } catch (error3) {
        throw new Error(`${numString} can't be converted to BigInt. Set options.wrapNumbers to get string value.`);
      }
    } else {
      throw new Error(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
    }
  }
  return num;
}, "convertNumber");
var convertString = /* @__PURE__ */ __name((stringValue) => stringValue, "convertString");
var convertBinary = /* @__PURE__ */ __name((binaryValue) => binaryValue, "convertBinary");
var convertList = /* @__PURE__ */ __name((list, options) => list.map((item) => convertToNative(item, options)), "convertList");
var convertMap = /* @__PURE__ */ __name((map, options) => Object.entries(map).reduce((acc, [key, value]) => (acc[key] = convertToNative(value, options), acc), {}), "convertMap");

// node_modules/@aws-sdk/util-dynamodb/dist-es/marshall.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function marshall(data, options) {
  const attributeValue = convertToAttr(data, options);
  const [key, value] = Object.entries(attributeValue)[0];
  switch (key) {
    case "M":
    case "L":
      return options?.convertTopLevelContainer ? attributeValue : value;
    case "SS":
    case "NS":
    case "BS":
    case "S":
    case "N":
    case "B":
    case "NULL":
    case "BOOL":
    case "$unknown":
    default:
      return attributeValue;
  }
}
__name(marshall, "marshall");

// node_modules/@aws-sdk/util-dynamodb/dist-es/models.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-dynamodb/dist-es/unmarshall.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var unmarshall = /* @__PURE__ */ __name((data, options) => {
  if (options?.convertWithoutMapWrapper) {
    return convertToNative(data, options);
  }
  return convertToNative({ M: data }, options);
}, "unmarshall");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/utils.js
var SELF = null;
var ALL_VALUES = {};
var ALL_MEMBERS = [];
var NEXT_LEVEL = "*";
var processObj = /* @__PURE__ */ __name((obj, processFunc, keyNodes) => {
  if (obj !== void 0) {
    if (keyNodes == null) {
      return processFunc(obj);
    } else {
      const keys = Object.keys(keyNodes);
      const goToNextLevel = keys.length === 1 && keys[0] === NEXT_LEVEL;
      const someChildren = keys.length >= 1 && !goToNextLevel;
      const allChildren = keys.length === 0;
      if (someChildren) {
        return processKeysInObj(obj, processFunc, keyNodes);
      } else if (allChildren) {
        return processAllKeysInObj(obj, processFunc, SELF);
      } else if (goToNextLevel) {
        return Object.entries(obj ?? {}).reduce((acc, [k2, v2]) => {
          if (typeof v2 !== "function") {
            acc[k2] = processObj(v2, processFunc, keyNodes[NEXT_LEVEL]);
          }
          return acc;
        }, Array.isArray(obj) ? [] : {});
      }
    }
  }
  return void 0;
}, "processObj");
var processKeysInObj = /* @__PURE__ */ __name((obj, processFunc, keyNodes) => {
  let accumulator;
  if (Array.isArray(obj)) {
    accumulator = obj.filter((item) => typeof item !== "function");
  } else {
    accumulator = {};
    for (const [k2, v2] of Object.entries(obj)) {
      if (typeof v2 !== "function") {
        accumulator[k2] = v2;
      }
    }
  }
  for (const [nodeKey, nodes] of Object.entries(keyNodes)) {
    if (typeof obj[nodeKey] === "function") {
      continue;
    }
    const processedValue = processObj(obj[nodeKey], processFunc, nodes);
    if (processedValue !== void 0 && typeof processedValue !== "function") {
      accumulator[nodeKey] = processedValue;
    }
  }
  return accumulator;
}, "processKeysInObj");
var processAllKeysInObj = /* @__PURE__ */ __name((obj, processFunc, keyNodes) => {
  if (Array.isArray(obj)) {
    return obj.filter((item) => typeof item !== "function").map((item) => processObj(item, processFunc, keyNodes));
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "function") {
      return acc;
    }
    const processedValue = processObj(value, processFunc, keyNodes);
    if (processedValue !== void 0 && typeof processedValue !== "function") {
      acc[key] = processedValue;
    }
    return acc;
  }, {});
}, "processAllKeysInObj");
var marshallInput = /* @__PURE__ */ __name((obj, keyNodes, options) => {
  const marshallFunc = /* @__PURE__ */ __name((toMarshall) => marshall(toMarshall, options), "marshallFunc");
  return processKeysInObj(obj, marshallFunc, keyNodes);
}, "marshallInput");
var unmarshallOutput = /* @__PURE__ */ __name((obj, keyNodes, options) => {
  const unmarshallFunc = /* @__PURE__ */ __name((toMarshall) => unmarshall(toMarshall, options), "unmarshallFunc");
  return processKeysInObj(obj, unmarshallFunc, keyNodes);
}, "unmarshallOutput");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/baseCommand/DynamoDBDocumentClientCommand.js
var DynamoDBDocumentClientCommand = class extends Command {
  addMarshallingMiddleware(configuration) {
    const { marshallOptions = {}, unmarshallOptions = {} } = configuration.translateConfig || {};
    marshallOptions.convertTopLevelContainer = marshallOptions.convertTopLevelContainer ?? true;
    unmarshallOptions.convertWithoutMapWrapper = unmarshallOptions.convertWithoutMapWrapper ?? true;
    this.clientCommand.middlewareStack.addRelativeTo((next, context2) => async (args) => {
      setFeature2(context2, "DDB_MAPPER", "d");
      args.input = marshallInput(args.input, this.inputKeyNodes, marshallOptions);
      return next(args);
    }, {
      name: "DocumentMarshall",
      relation: "before",
      toMiddleware: "serializerMiddleware",
      override: true
    });
    this.clientCommand.middlewareStack.addRelativeTo((next, context2) => async (args) => {
      const deserialized = await next(args);
      deserialized.output = unmarshallOutput(deserialized.output, this.outputKeyNodes, unmarshallOptions);
      return deserialized;
    }, {
      name: "DocumentUnmarshall",
      relation: "before",
      toMiddleware: "deserializerMiddleware",
      override: true
    });
  }
};
__name(DynamoDBDocumentClientCommand, "DynamoDBDocumentClientCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/BatchExecuteStatementCommand.js
var BatchExecuteStatementCommand2 = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    Statements: {
      "*": {
        Parameters: ALL_MEMBERS
      }
    }
  };
  outputKeyNodes = {
    Responses: {
      "*": {
        Error: {
          Item: ALL_VALUES
        },
        Item: ALL_VALUES
      }
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new BatchExecuteStatementCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(BatchExecuteStatementCommand2, "BatchExecuteStatementCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/BatchGetCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BatchGetCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    RequestItems: {
      "*": {
        Keys: {
          "*": ALL_VALUES
        }
      }
    }
  };
  outputKeyNodes = {
    Responses: {
      "*": {
        "*": ALL_VALUES
      }
    },
    UnprocessedKeys: {
      "*": {
        Keys: {
          "*": ALL_VALUES
        }
      }
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new BatchGetItemCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(BatchGetCommand, "BatchGetCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/BatchWriteCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BatchWriteCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    RequestItems: {
      "*": {
        "*": {
          PutRequest: {
            Item: ALL_VALUES
          },
          DeleteRequest: {
            Key: ALL_VALUES
          }
        }
      }
    }
  };
  outputKeyNodes = {
    UnprocessedItems: {
      "*": {
        "*": {
          PutRequest: {
            Item: ALL_VALUES
          },
          DeleteRequest: {
            Key: ALL_VALUES
          }
        }
      }
    },
    ItemCollectionMetrics: {
      "*": {
        "*": {
          ItemCollectionKey: ALL_VALUES
        }
      }
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new BatchWriteItemCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(BatchWriteCommand, "BatchWriteCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/DeleteCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DeleteCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    Key: ALL_VALUES,
    Expected: {
      "*": {
        Value: SELF,
        AttributeValueList: ALL_MEMBERS
      }
    },
    ExpressionAttributeValues: ALL_VALUES
  };
  outputKeyNodes = {
    Attributes: ALL_VALUES,
    ItemCollectionMetrics: {
      ItemCollectionKey: ALL_VALUES
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new DeleteItemCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(DeleteCommand, "DeleteCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/ExecuteStatementCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ExecuteStatementCommand2 = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    Parameters: ALL_MEMBERS
  };
  outputKeyNodes = {
    Items: {
      "*": ALL_VALUES
    },
    LastEvaluatedKey: ALL_VALUES
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new ExecuteStatementCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(ExecuteStatementCommand2, "ExecuteStatementCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/ExecuteTransactionCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ExecuteTransactionCommand2 = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    TransactStatements: {
      "*": {
        Parameters: ALL_MEMBERS
      }
    }
  };
  outputKeyNodes = {
    Responses: {
      "*": {
        Item: ALL_VALUES
      }
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new ExecuteTransactionCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(ExecuteTransactionCommand2, "ExecuteTransactionCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/GetCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GetCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    Key: ALL_VALUES
  };
  outputKeyNodes = {
    Item: ALL_VALUES
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new GetItemCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(GetCommand, "GetCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/PutCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PutCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    Item: ALL_VALUES,
    Expected: {
      "*": {
        Value: SELF,
        AttributeValueList: ALL_MEMBERS
      }
    },
    ExpressionAttributeValues: ALL_VALUES
  };
  outputKeyNodes = {
    Attributes: ALL_VALUES,
    ItemCollectionMetrics: {
      ItemCollectionKey: ALL_VALUES
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new PutItemCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(PutCommand, "PutCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/QueryCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var QueryCommand2 = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    KeyConditions: {
      "*": {
        AttributeValueList: ALL_MEMBERS
      }
    },
    QueryFilter: {
      "*": {
        AttributeValueList: ALL_MEMBERS
      }
    },
    ExclusiveStartKey: ALL_VALUES,
    ExpressionAttributeValues: ALL_VALUES
  };
  outputKeyNodes = {
    Items: {
      "*": ALL_VALUES
    },
    LastEvaluatedKey: ALL_VALUES
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new QueryCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(QueryCommand2, "QueryCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/ScanCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ScanCommand2 = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    ScanFilter: {
      "*": {
        AttributeValueList: ALL_MEMBERS
      }
    },
    ExclusiveStartKey: ALL_VALUES,
    ExpressionAttributeValues: ALL_VALUES
  };
  outputKeyNodes = {
    Items: {
      "*": ALL_VALUES
    },
    LastEvaluatedKey: ALL_VALUES
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new ScanCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(ScanCommand2, "ScanCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/TransactGetCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TransactGetCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    TransactItems: {
      "*": {
        Get: {
          Key: ALL_VALUES
        }
      }
    }
  };
  outputKeyNodes = {
    Responses: {
      "*": {
        Item: ALL_VALUES
      }
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new TransactGetItemsCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(TransactGetCommand, "TransactGetCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/TransactWriteCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TransactWriteCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    TransactItems: {
      "*": {
        ConditionCheck: {
          Key: ALL_VALUES,
          ExpressionAttributeValues: ALL_VALUES
        },
        Put: {
          Item: ALL_VALUES,
          ExpressionAttributeValues: ALL_VALUES
        },
        Delete: {
          Key: ALL_VALUES,
          ExpressionAttributeValues: ALL_VALUES
        },
        Update: {
          Key: ALL_VALUES,
          ExpressionAttributeValues: ALL_VALUES
        }
      }
    }
  };
  outputKeyNodes = {
    ItemCollectionMetrics: {
      "*": {
        "*": {
          ItemCollectionKey: ALL_VALUES
        }
      }
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new TransactWriteItemsCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(TransactWriteCommand, "TransactWriteCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/UpdateCommand.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var UpdateCommand = class extends DynamoDBDocumentClientCommand {
  input;
  inputKeyNodes = {
    Key: ALL_VALUES,
    AttributeUpdates: {
      "*": {
        Value: SELF
      }
    },
    Expected: {
      "*": {
        Value: SELF,
        AttributeValueList: ALL_MEMBERS
      }
    },
    ExpressionAttributeValues: ALL_VALUES
  };
  outputKeyNodes = {
    Attributes: ALL_VALUES,
    ItemCollectionMetrics: {
      ItemCollectionKey: ALL_VALUES
    }
  };
  clientCommand;
  middlewareStack;
  constructor(input) {
    super();
    this.input = input;
    this.clientCommand = new UpdateItemCommand(this.input);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);
    return async () => handler(this.clientCommand);
  }
};
__name(UpdateCommand, "UpdateCommand");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/DynamoDBDocumentClient.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DynamoDBDocumentClient = class extends Client {
  config;
  constructor(client, translateConfig) {
    super(client.config);
    this.config = client.config;
    this.config.translateConfig = translateConfig;
    this.middlewareStack = client.middlewareStack;
    if (this.config?.cacheMiddleware) {
      throw new Error("@aws-sdk/lib-dynamodb - cacheMiddleware=true is not compatible with the DynamoDBDocumentClient. This option must be set to false.");
    }
  }
  static from(client, translateConfig) {
    return new DynamoDBDocumentClient(client, translateConfig);
  }
  destroy() {
  }
};
__name(DynamoDBDocumentClient, "DynamoDBDocumentClient");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/DynamoDBDocument.js
var DynamoDBDocument = class extends DynamoDBDocumentClient {
  static from(client, translateConfig) {
    return new DynamoDBDocument(client, translateConfig);
  }
  batchExecuteStatement(args, optionsOrCb, cb) {
    const command = new BatchExecuteStatementCommand2(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchGet(args, optionsOrCb, cb) {
    const command = new BatchGetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchWrite(args, optionsOrCb, cb) {
    const command = new BatchWriteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  delete(args, optionsOrCb, cb) {
    const command = new DeleteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  executeStatement(args, optionsOrCb, cb) {
    const command = new ExecuteStatementCommand2(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  executeTransaction(args, optionsOrCb, cb) {
    const command = new ExecuteTransactionCommand2(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  get(args, optionsOrCb, cb) {
    const command = new GetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  put(args, optionsOrCb, cb) {
    const command = new PutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  query(args, optionsOrCb, cb) {
    const command = new QueryCommand2(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  scan(args, optionsOrCb, cb) {
    const command = new ScanCommand2(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  transactGet(args, optionsOrCb, cb) {
    const command = new TransactGetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  transactWrite(args, optionsOrCb, cb) {
    const command = new TransactWriteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  update(args, optionsOrCb, cb) {
    const command = new UpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") {
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      }
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
};
__name(DynamoDBDocument, "DynamoDBDocument");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/commands/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/lib-dynamodb/dist-es/pagination/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/lib-dynamodb/dist-es/pagination/Interfaces.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/lib-dynamodb/dist-es/pagination/QueryPaginator.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var paginateQuery = createPaginator(DynamoDBDocumentClient, QueryCommand2, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");

// node_modules/@aws-sdk/lib-dynamodb/dist-es/pagination/ScanPaginator.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var paginateScan = createPaginator(DynamoDBDocumentClient, ScanCommand2, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");

// src/index.ts
var initializeDynamoClient = /* @__PURE__ */ __name((env2) => {
  const baseClient = new DynamoDBClient({
    endpoint: env2.DYNAMODB_ENDPOINT,
    region: "local",
    credentials: {
      accessKeyId: env2.AWS_ACCESS_KEY_ID,
      secretAccessKey: env2.AWS_SECRET_ACCESS_KEY
    }
  });
  return DynamoDBDocument.from(baseClient, {
    marshallOptions: {
      removeUndefinedValues: true,
      convertEmptyValues: false,
      convertClassInstanceToMap: true
    },
    unmarshallOptions: {
      wrapNumbers: false
    }
  });
}, "initializeDynamoClient");
var src_default = {
  /**
   * リクエストハンドラ
   * @param request リクエスト
   * @param env 環境変数
   */
  async fetch(request, env2) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }
    const client = initializeDynamoClient(env2);
    const url = new URL(request.url);
    const requestId = crypto.randomUUID();
    const startTime = Date.now();
    console.info(`[${(/* @__PURE__ */ new Date()).toISOString()}] Incoming request`, {
      method: request.method,
      path: url.pathname,
      requestId
    });
    try {
      const routeHandlers = {
        stocks: handleStockRequests
        // ここにルートを追加可能
      };
      const routeKey = url.pathname.split("/")[1] ?? "";
      const handler = routeHandlers[routeKey];
      if (!handler) {
        return formatResponse(
          { error: "Route not found" },
          404,
          requestId,
          startTime
        );
      }
      return await handler(request, client, env2, url, requestId, startTime);
    } catch (error3) {
      console.error(`[${requestId}] Error:`, error3);
      return formatResponse(
        { error: "Internal server error" },
        500,
        requestId,
        startTime
      );
    }
  }
};
var handleStockRequests = /* @__PURE__ */ __name(async (request, client, env2, url, requestId, startTime) => {
  const pathParts = url.pathname.split("/").filter(Boolean);
  const isStocksRoot = pathParts.length === 1 && pathParts[0] === "stocks";
  const stockCode = pathParts[1] ?? "";
  if (request.method === "GET") {
    if (isStocksRoot) {
      return handleListStocks(request, client, env2, url, requestId, startTime);
    } else if (stockCode) {
      return handleGetStock(stockCode, request, client, env2, requestId, startTime);
    } else {
      return formatResponse({ error: "Not found" }, 404, requestId, startTime);
    }
  }
  const methodHandlers = {
    POST: handleCreateStock,
    PUT: handleUpdateStock,
    DELETE: handleDeleteStock
  };
  const handler = methodHandlers[request.method];
  if (!handler) {
    return formatResponse({ error: "Method not allowed" }, 405, requestId, startTime);
  }
  return handler(stockCode, request, client, env2, requestId, startTime);
}, "handleStockRequests");
var handleGetStock = /* @__PURE__ */ __name(async (stockCode, _request, client, env2, requestId, startTime) => {
  if (!stockCode) {
    return formatResponse({ error: "Stock code required" }, 400, requestId, startTime);
  }
  const { Item } = await client.send(
    new GetCommand({
      TableName: env2.DYNAMODB_TABLE,
      Key: { stock_code: stockCode }
    })
  );
  return Item ? formatResponse({ data: Item }, 200, requestId, startTime) : formatResponse({ error: "Stock not found" }, 404, requestId, startTime);
}, "handleGetStock");
var handleListStocks = /* @__PURE__ */ __name(async (request, client, env2, url, requestId, startTime) => {
  const params = url.searchParams;
  const limit = parseInt(params.get("limit") || "20", 10);
  const offset = parseInt(params.get("offset") || "0", 10);
  const page = parseInt(params.get("page") || "1", 10);
  const effectiveOffset = params.has("offset") ? offset : (page - 1) * limit;
  const nameFilter = params.get("name");
  const categoryFilter = params.get("category");
  const sortParam = params.get("sort") || "";
  const sortFields = sortParam.split(",").filter((f2) => f2);
  let filterExpression = "";
  let expressionAttributeNames = {};
  let expressionAttributeValues = {};
  if (nameFilter) {
    filterExpression += "#name = :name";
    expressionAttributeNames["#name"] = "stock_name";
    expressionAttributeValues[":name"] = nameFilter;
  }
  if (categoryFilter) {
    if (filterExpression)
      filterExpression += " AND ";
    filterExpression += "#category = :category";
    expressionAttributeNames["#category"] = "category";
    expressionAttributeValues[":category"] = categoryFilter;
  }
  const scanParams = {
    TableName: env2.DYNAMODB_TABLE
  };
  if (filterExpression) {
    scanParams.FilterExpression = filterExpression;
    scanParams.ExpressionAttributeNames = expressionAttributeNames;
    scanParams.ExpressionAttributeValues = expressionAttributeValues;
  }
  const scanResult = await client.scan(scanParams);
  let items = scanResult.Items || [];
  if (sortFields.length > 0) {
    items.sort((a2, b2) => {
      for (const field of sortFields) {
        let desc = false;
        let key = field;
        if (field.startsWith("-")) {
          desc = true;
          key = field.substring(1);
        }
        if (a2[key] < b2[key])
          return desc ? 1 : -1;
        if (a2[key] > b2[key])
          return desc ? -1 : 1;
      }
      return 0;
    });
  }
  const total = items.length;
  const pagedItems = items.slice(effectiveOffset, effectiveOffset + limit);
  return formatResponse(
    {
      data: pagedItems,
      metadata: {
        requestId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        durationMs: Date.now() - startTime
      },
      pagination: {
        limit,
        offset: effectiveOffset,
        total
      }
    },
    200,
    requestId,
    startTime
  );
}, "handleListStocks");
var handleCreateStock = /* @__PURE__ */ __name(async (stockCode, request, client, env2, requestId, startTime) => {
  const body = await request.json();
  if (!body.stock_code || body.stock_code !== stockCode) {
    return formatResponse({ error: "Stock code mismatch" }, 400, requestId, startTime);
  }
  await client.send(
    new PutCommand({
      TableName: env2.DYNAMODB_TABLE,
      Item: body,
      ConditionExpression: "attribute_not_exists(stock_code)"
    })
  );
  return formatResponse({ data: { success: true } }, 201, requestId, startTime);
}, "handleCreateStock");
var handleUpdateStock = /* @__PURE__ */ __name(async (stockCode, request, client, env2, requestId, startTime) => {
  const body = await request.json();
  if (!body.stock_code || body.stock_code !== stockCode) {
    return formatResponse(
      { error: "Stock code in path and body must match" },
      400,
      requestId,
      startTime
    );
  }
  const { stock_name, quantity, ...otherAttributes } = body;
  let updateExpression = "SET ";
  const expressionAttributeValues = {};
  const expressionAttributeNames = {};
  let firstAttribute = true;
  if (stock_name !== void 0) {
    updateExpression += `${firstAttribute ? "" : ", "}#n = :n`;
    expressionAttributeNames["#n"] = "stock_name";
    expressionAttributeValues[":n"] = stock_name;
    firstAttribute = false;
  }
  if (quantity !== void 0) {
    updateExpression += `${firstAttribute ? "" : ", "}#q = :q`;
    expressionAttributeNames["#q"] = "quantity";
    expressionAttributeValues[":q"] = quantity;
    firstAttribute = false;
  }
  if (firstAttribute) {
    return formatResponse({ error: "No fields to update provided" }, 400, requestId, startTime);
  }
  try {
    await client.send(
      new UpdateCommand({
        TableName: env2.DYNAMODB_TABLE,
        Key: { stock_code: stockCode },
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        ConditionExpression: "attribute_exists(stock_code)",
        ReturnValues: "UPDATED_NEW"
      })
    );
    return formatResponse({ data: { success: true } }, 200, requestId, startTime);
  } catch (error3) {
    if (error3.name === "ConditionalCheckFailedException") {
      return formatResponse({ error: "Stock not found for update" }, 404, requestId, startTime);
    }
    console.error(`[UpdateStock Error - ${stockCode}]`, error3);
    return formatResponse({ error: "Failed to update stock" }, 500, requestId, startTime);
  }
}, "handleUpdateStock");
var handleDeleteStock = /* @__PURE__ */ __name(async (stockCode, _request, client, env2, requestId, startTime) => {
  try {
    const { Attributes } = await client.send(
      new DeleteCommand({
        TableName: env2.DYNAMODB_TABLE,
        Key: { stock_code: stockCode },
        ReturnValues: "ALL_OLD"
      })
    );
    return Attributes ? formatResponse({ data: { success: true } }, 200, requestId, startTime) : formatResponse({ error: "Stock not found" }, 404, requestId, startTime);
  } catch (error3) {
    console.error(`[Delete Error - ${stockCode}]`, error3);
    return formatResponse({ error: "Deletion failed" }, 500, requestId, startTime);
  }
}, "handleDeleteStock");
function formatResponse(data, status = 200, requestId, startTime) {
  const responseBody = {
    ...data,
    metadata: {
      requestId: requestId || "N/A",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      ...startTime && { durationMs: Date.now() - startTime }
    }
  };
  return new Response(JSON.stringify(responseBody), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(formatResponse, "formatResponse");

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e2) {
      console.error("Failed to drain the unused request body.", e2);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e2) {
    const error3 = reduceError(e2);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-X57t9V/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-X57t9V/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
