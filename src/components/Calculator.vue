<template>

  <div class="card center">
    <h1>Calculator</h1>
    <div class="calculator">
      <div class="output" :style="{fontSize: fontSize + 'rem'}">{{ operand }}</div>
      <table>
        <tr>
          <td><button>%</button></td>
          <td><button>CE</button></td>
          <td><button>C</button></td>
          <td><button>&lArr;</button></td>
        </tr>
        <tr>
          <td><button @click="setOperation('1/x')">1&frasl;x</button></td>
          <td><button @click="setOperation('sqr')">x<sup>2</sup></button></td>
          <td><button @click="setOperation('sqrt')">&radic;x</button></td>
          <td><button @click="setOperation('/')">&divide;</button></td>
        </tr>
        <tr>
          <td><button @click="appendNumber('7')">7</button></td>
          <td><button @click="appendNumber('8')">8</button></td>
          <td><button @click="appendNumber('9')">9</button></td>
          <td><button @click="setOperation('*')">&times;</button></td>
        </tr>
        
        <tr>
          <td><button @click="appendNumber('4')">4</button></td>
          <td><button @click="appendNumber('5')">5</button></td>
          <td><button @click="appendNumber('6')">6</button></td>
          <td><button @click="setOperation('+')">+</button></td>
        </tr>
        <tr>
          <td><button @click="appendNumber('1')">1</button></td>
          <td><button @click="appendNumber('2')">2</button></td>
          <td><button @click="appendNumber('3')">3</button></td>
          <td><button @click="setOperation('-')">&minus;</button></td>
        </tr>
        <tr>
          <td><button @click="setOperation('minus')">&plusmn;</button></td>
          <td><button @click="appendNumber('0')">0</button></td>
          <td><button @click="appendNumber('.')">.</button></td>
          <td><button @click="result">=</button></td>
        </tr>
      </table>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'AppCalculator',
    
    data() {
      return {
        operand: '0',
        buffer: '',
        operation: '',
      }
    },
    
    methods: {
      appendNumber(digit) {
        // check reasonable length
        if (this.operand.length < 16)
          this.operand += digit
        
        // check if number supposed to be float
        if (this.operand[0] == 0 && digit != '.')
          this.operand = this.operand.slice(1)
      },
      setOperation(op) {
        let x = Number(this.operand)
        // work only if buffer is empty
        if (!this.buffer)
          switch (op) {
            case '+':
              this.buffer = x
              this.operand = ''
              this.operation = '+'
              break
            case '-':
              this.buffer = x
              this.operand = ''
              this.operation = '-'
              break
            case '*':
              this.buffer = x
              this.operand = ''
              this.operation = '*'
              break
            case '/':
              this.buffer = x
              this.operand = ''
              this.operation = '/'
              break
            case '1/x':
              this.operand = (1/x).toFixed(5)
              break
            case 'sqr':
              this.operand = String(x*x)
              break
            case 'sqrt':
              this.operand = String(Math.sqrt(x))
              break
            case 'minus':
              this.operand = String(-x)
              break
          }
        },
      },
      result() {
        let x = Number(this.buffer)
        let y = Number(this.operand)
        let result
        
        switch (this.operation) {
          case '+':
            this.operand = String(x + y)
            break
          case '-':
            this.operand = String(x - y)
            break
          case '*':
            this.operand = String(x * y)
            break
          case '/':
            this.operand = String(x / y)
            break
        }
        
        this.buffer = ''
      },
    
    computed: {
      fontSize() {
        return 40/(this.operand.length + 10)
      },
    },
  }

</script>


<style scoped>
  .calculator {
    height: 30rem;
  }
  
  .output {
    display: flex;
    justify-content: flex-end;
    
    font-size: 3rem;
  }
  
  table {
    border: none;
    border-collapse: collapse;
  }
  
  td {
    padding: 0;
    border: 2px #eee solid;
  }
  
  button {
    width: 4rem;
    height: 4rem;
    margin: 0;
    border: none;
    background-color: #f7f7f7;
    font-size: 1rem;
    
    transition: background-color .1s linear;
  }
  
  button:focus {
    outline: none;
  }
  
  button:hover {
    background-color: #e8e8e8;
  }
  
  button:active {
    background-color: #c6c6c6;
  }
</style>