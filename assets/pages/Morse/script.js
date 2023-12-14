function traduzirParaMorse() {
    const texto = document.getElementById('textoEntrada').value.toLowerCase();
    const morse = {
      'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
      'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
      'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
      'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
      'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
      'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
      '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
      '9': '----.', ' ': '/'
    };
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
      if (morse[char]) {
        resultado += morse[char] + ' ';
      } else {
        resultado += char + ' ';
      }
    }
    document.getElementById('resultadoMorse').value = resultado.trim();
  }

  function traduzirParaTexto() {
    const morse = {
      '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
      '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
      '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
      '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
      '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
      '--..': 'z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
      '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
      '----.': '9', '/': ' '
    };
    const codigoMorse = document.getElementById('morseEntrada').value.trim();
    const palavras = codigoMorse.split(' / ');
    let resultado = '';
    palavras.forEach(palavra => {
      const letras = palavra.split(' ');
      letras.forEach(letra => {
        if (morse[letra]) {
          resultado += morse[letra];
        } else {
          resultado += ' ';
        }
      });
      resultado += ' ';
    });
    document.getElementById('resultadoTexto').value = resultado.trim();
  }