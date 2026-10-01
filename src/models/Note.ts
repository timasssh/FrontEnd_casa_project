class Note {
    id : number | null
    title : String
    message : String

    constructor(id : number | null, title : String, message : String) {
        this.id = id
        this.title = title
        this.message = message
    }
}

export default Note
