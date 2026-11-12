export type PeerStudent = {
  /** Student number (e.g. 1 for SN1). */
  sn: number;
  name: string;
};

export type PeerPair = {
  a: PeerStudent;
  b: PeerStudent;
};

export type PeerGroup = {
  group: number;
  range: string;
  pairs: PeerPair[];
};

/**
 * Partner assignments for the Padlet (asynchronous discussion) activity.
 * Students respond to the classmate they are paired with; each pair is the
 * first and last student of a block (SN1 ↔ SN10, SN2 ↔ SN9, and so on).
 * The group number is only a locator.
 */
export const PEER_RESPONSE_GROUPS: PeerGroup[] = [
  {
    group: 1,
    range: 'SN1–SN10',
    pairs: [
      { a: { sn: 1, name: 'Abad, Jose' }, b: { sn: 10, name: 'Garcia, Andrea' } },
      { a: { sn: 2, name: 'Aguilar, Maria' }, b: { sn: 9, name: 'Flores, Katrina' } },
      { a: { sn: 3, name: 'Aquino, Francis' }, b: { sn: 8, name: 'Fernandez, Paolo' } },
      { a: { sn: 4, name: 'Bautista, Carlo' }, b: { sn: 7, name: 'Dela Cruz, Sofia' } },
      { a: { sn: 5, name: 'Castillo, Angela' }, b: { sn: 6, name: 'Cruz, Miguel' } },
    ],
  },
  {
    group: 2,
    range: 'SN11–SN20',
    pairs: [
      { a: { sn: 11, name: 'Gonzales, Mark' }, b: { sn: 20, name: 'Padilla, Jasmine' } },
      { a: { sn: 12, name: 'Hernandez, Camille' }, b: { sn: 19, name: 'Ocampo, Rafael' } },
      { a: { sn: 13, name: 'Lim, Joshua' }, b: { sn: 18, name: 'Navarro, Nicole' } },
      { a: { sn: 14, name: 'Lopez, Patricia' }, b: { sn: 17, name: 'Mendoza, Gabriel' } },
      { a: { sn: 15, name: 'Mercado, Vincent' }, b: { sn: 16, name: 'Medina, Rafael' } },
    ],
  },
  {
    group: 3,
    range: 'SN21–SN30',
    pairs: [
      { a: { sn: 21, name: 'Ramos, Daniel' }, b: { sn: 30, name: 'Villanueva, Gabrielle' } },
      { a: { sn: 22, name: 'Reyes, Isabelle' }, b: { sn: 29, name: 'Valdez, Enzo' } },
      { a: { sn: 23, name: 'Rivera, Nathan' }, b: { sn: 28, name: 'Torres, Bianca' } },
      { a: { sn: 24, name: 'Santos, Beatrice' }, b: { sn: 27, name: 'Tan, Christian' } },
      { a: { sn: 25, name: 'Santiago, Adrian' }, b: { sn: 26, name: 'Soriano, Mikaela' } },
    ],
  },
];
