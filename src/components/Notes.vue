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
        <div class="text"> {{ notes[index].noteText }} </div>
        <div class="notes-control">
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
  }

  .add-note {
    margin-left: 1rem;
  }

  .list-item {
    padding-left: 1rem;
  }

  .text {
    display: flex;
    overflow: hidden;
  }

  .list-item--marked {
    background: #ffc7c0;
  }

  .list-item--marked:hover {
    background-color: #ffb4aa;
  }

  @media (min-width: 800px) {
    .note-input {
      width: 60%;
    }
  }

  @media (max-width: 480px) {
    .note-input {
      display: block;
    }

    .list-item {
      flex-direction: column;
    }

    .notes-control {
      margin: 1rem 0;
    }

    .add-note {
      margin: 0.6rem 0;
    }
  }
</style>
