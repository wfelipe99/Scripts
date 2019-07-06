# Script útil para procurar por uma determinada string
# e substituir por qualquer outra coisa

import os
import fileinput
import re

tipoArquivo = ".ini"
procurarPor = "level=.*"
substituirPor = "level=000"

for arquivosPasta in os.listdir(os.getcwd()):
  if arquivosPasta.endswith(tipoArquivo):
    with fileinput.FileInput(arquivosPasta, inplace=True, backup='.backup') as arquivo:
      for conteudoArquivo in arquivo:
        print(re.sub(procurarPor, substituirPor, conteudoArquivo), end='')