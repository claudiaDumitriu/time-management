export class Task {
  constructor(
    public name: string,
    public priority: string,
    public duration: number,
    public status: string,
    public date: Date,
    public type: string,
    public deadline: Date
  ) {}
}
