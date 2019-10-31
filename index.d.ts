import { EventEmitter } from 'events';
declare const enum STATEMENTS {
    ALL = 'ALL',
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
}

declare const enum EVENTS {
    STARTED = 'started',
    STOPPED = 'stopped',
    PAUSED = 'paused',
    RESUMED = 'resumed',
    BINLOG = 'binlog',
    TRIGGER_ERROR = 'triggerError',
    CONNECTION_ERROR = 'connectionError',
    ZONGJI_ERROR = 'zongjiError'
}

export declare class MySQLEvents extends EventEmitter {
    constructor(connection: any, options?: any);
    static STATEMENTS = STATEMENTS;
    static EVENTS = EVENTS;
    start();
    on(...args: any[]);
    addTrigger(options: any);
}