<template>

  <div class="card center">
    <h1>Calculator</h1>
    <div class="calculator">
      <div class="output">
        <p class="buffer">{{ buffer }}</p>
        <p :style="{fontSize: fontSize + 'rem'}">{{ operand }}</p>
      </div>
      <table>
        <tr>
          <td><button @click="operand = String(operand*100)">%</button></td>
          <td><button @click="clearAll">CE</button></td>
          <td><button @click="clear">C</button></td>
          <td><button @click="del">&lArr;</button></td>
        </tr>
        <tr>
          <td><button @click="operand = String(1/operand)">1&frasl;x</button></td>
          <td><button @click="operand = String(operand * operand)">x<sup>2</sup></button></td>
          <td><button @click="operand = String(Math.sqrt(operand))">&radic;x</button></td>
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
          <td><button @click="operand = String(-operand)">&plusmn;</button></td>
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
        // check if '.' already in string
        if (digit == '.')
          if (this.operand.indexOf('.') != -1)
            digit = ''
        
        // check reasonable length
        if (this.operand.length < 15) {
          if (this.buffer.indexOf(/\D/) != -1 && this.buffer.indexOf('=') != -1) {
            this.operand = digit
            this.buffer = ''
          }
          else
            this.operand += digit
        }
          
        
        // check first symbol zero
        if (this.operand[0] == 0 && digit != '.')
          this.operand = this.operand.slice(1)
      },
      
      del() {
        if (this.operand.length == 1)
          this.operand = '0'
        else
          this.operand = this.operand.slice(0, this.operand.length - 1)
      },
      
      setOperation(op) {
        this.operation = op
        this.buffer = (this.operand == '0') ? '' : (this.operand + '' + op + '')
        this.operand = '0'
      },
      
      clear() {
        this.operand = '0'
      },
      
      clearAll() {
        this.operand = '0'
        this.buffer = ''
      },
      
      result() {
        let x = Number.parseFloat(this.buffer)
        let y = Number(this.operand)
        
        this.buffer += this.operand + ' = '

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
      },
    },
    
    computed: {
      fontSize() {
        if (this.operand.length < 7)
          return 4
        else if (this.operand.length < 12)
          return 2.5
        else
          return 1.7
      },
    },
  }

</script>


<style scoped>
  .calculator {
    height: 35rem;
  }
  
  .output {
    position: relative;
    
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
    height: 6rem;
  }
  
  p {
    line-height: normal;
    margin: 0;
  }
  
  .buffer {
    position: absolute;
    right: 0;
    top: 0;
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