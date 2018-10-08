export class PunchCard {
    userid: number;
    time: Date;
    mode: ClockMode;
    pin: number
}

export enum ClockMode {
    CLOCK_IN = 1,
    CLOCK_OUT = 2
}