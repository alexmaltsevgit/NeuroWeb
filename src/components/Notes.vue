<template>

  <div class="card">
    <h1>Notes</h1>
    <div class="form-control note-input">
      <input type="textarea" placeholder="Your note" v-model="inputNote" @keypress.enter="addNewNote">
      <button class="btn add-note" @click="addNewNote">add note</button>
    </div>
    <hr>
    <ul class="list" v-if="notes.length">
      <li class="list-item" :class="{'list-item--marked': notes[index].isMarked}" :id="'note' + index" v-for="(note, index) in notes" :key="index">
        {{ notes[index].noteText }}
        <div>
          <button class="btn warning" @click="markNote(index)">{{ (notes[index].isMarked) ? "unmark" : "mark" }}</button>
          <button class="btn danger" @click="deleteNote(index)">delete</button>
        </div>
      </li>
    </ul>
    <div v-else>No notes added. Try to create new!</div>
  </div>

</template>


<script>
  export default {
    name: 'AppNotes',
    
    data() {
      return {
        notes: [],
        inputNote: '',
      }
    },
    
    methods: {
      addNewNote() {
        if (this.inputNote) {
          this.notes.push({
            noteText: this.inputNote,
            isMarked: false
          })
          this.inputNote = ''
        }
      },
      
      markNote(index) {
        this.notes[index].isMarked = !this.notes[index].isMarked
      },
      
      deleteNote(index) {
        this.notes.splice(index, 1)
      }
    }
  }

</script>


<style scoped>
  .note-input {
    display: flex;
    width: 60%;
  }

  .add-note {
    margin-left: 1rem;
  }

  .list-item {
    padding-left: 1rem;
  }

  .list-item--marked {
    background: #ffc7c0;
  }

  .list-item--marked:hover {
    background-color: #ffb4aa;
  }
</style>
