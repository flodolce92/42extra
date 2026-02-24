export interface FortyTwoUser {
  id: number;
  login: string;
  email: string;
  displayname: string;
  image: {
    link: string;
    versions: {
      large: string;
      medium: string;
      small: string;
      micro: string;
    };
  };
  correction_point: number;
  pool_month: string;
  pool_year: string;
  location: string | null;
  wallet: number;
  cursus_users: CursusUser[];
}

export interface CursusUser {
  grade: string | null;
  level: number;
  blackhole: string | null;
  cursus: {
    name: string;
  };
}

export interface FortyTwoEvent {
	id: number;
	name: string;
	description: string;
	location: string;
	kind: string;
	nbr_subscribers: number;
	begin_at: string;
	end_at: string;
}
