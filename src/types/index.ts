export type LogLevel = "INFO" | "ERROR" | "WARN" | "DEBUG";

export type Log = {
  id: string;
  time: Date;
  level: LogLevel;
  service: string;
  data: any;
}
