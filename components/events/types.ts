

export type EventDate = {
    month?:string,
    day?:string,
    week?:string
}

export interface EventType  {

    title?:string,
    router?:string,
    image?:string,
    date?:EventDate,
    hour?:string,
    className?:string


}