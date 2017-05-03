import Reflux from 'reflux'

export const listUpdate = Reflux.createAction();

export class NoteStore extends Reflux.Store{

    constructor()
    {
        super();
        this.state = {noteList : null };
        this.listenTo(listUpdate , this.onListUpdate);
    }
    onListUpdate(noteList)
    {
        this.setState( { noteList : noteList});
    }
}