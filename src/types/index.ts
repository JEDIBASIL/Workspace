
type Note =
  | {
      id: string;
      title: string;
      text: string;
      favorite: boolean;
      date_created: Date;
    }
  

type Action = {
  type: string;
  payload?: Note | any;
  id?: string | null;
};

type NoteContextType = {
  notes: Note[];
  noteDispatcher: NoteDispatcher ;
};

type NoteDispatcher =  React.Dispatch<Action>;


export type {Note, NoteContextType, Action, NoteDispatcher}