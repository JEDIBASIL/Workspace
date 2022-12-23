type Note = {
  id:string;
  title: string;
  text: string;
  favorite: boolean;
  date_created: Date;
};

  const saveNote = (note:Note[]):boolean => {
    localStorage.setItem("notes", JSON.stringify(note))
    return  true;
}

export {saveNote}
