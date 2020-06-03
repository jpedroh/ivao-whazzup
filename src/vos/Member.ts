export default class Member {
  public readonly vid: number;
  public readonly name: string;
  public readonly rating: number;
  public readonly administrativeRating: number;

  public constructor(vid: number, name: string, rating: number, administrativeRating: number) {
    this.vid = vid;
    this.name = name;
    this.rating = rating;
    this.administrativeRating = administrativeRating;
  }
}
