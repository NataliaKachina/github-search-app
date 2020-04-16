export class Repository {
  id: number;
  name: string;
  htmlUrl: string;
  owner: Owner;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name || '';
    this.htmlUrl = data.html_url || '';
    this.owner = data.owner ? new Owner(data.owner) : null;
  }
}

export class Owner {
  avatarUrl: string;

  constructor(data: any) {
    this.avatarUrl = data.avatar_url || '';
  }
}
