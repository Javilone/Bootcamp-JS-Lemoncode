# BootcampJS-entrega-00

Entrega 0 del bootcamp JavaScript y TypeScript de Lemoncode.

## Paso a paso

## 1. Crear un repositorio en local

- Abre tu terminal y navega hasta el directorio donde deseas crear el repositorio.
  > cd directorio/subdirectorio
- Crea una carpeta con el nombre del repositorio.
  > mkdir nuevoDirectorio
- Ingresa a la carpeta que acabas de crear.
  > cd nuevoDirectorio
- Inicializa el repositorio de Git.
  > git init

## 2. Subir el repositorio a GitHub

- Crea un nuevo repositorio en GitHub.
- Copia el URL del repositorio que acabas de crear en GitHub
- Conecta tu repositorio local con el repositorio en GitHub.
  > git remote add origin url-del-repositorio
- Verifica que la conexión se haya establecido correctamente.
  > git remote -v

## 3. Hacer un commit y un push

- Crea un archivo en la carpeta del repositorio.
- Añade el archivo al staging.
  > git add .
- Crea un commit con un mensaje descriptivo.
  > git commit -m "subiendo archivo entrega.md"
- Sube los cambios al repositorio en GitHub.
  > git push --set-upstream origin master

## 4. Crear una rama

- Crea una rama nueva llamada "development".
  > git branch development
- Cambia a la nueva rama.
  > git chekout development
- Realiza algunos cambios en el archivo que creaste.
- Añade y haz un commit con los cambios en la rama "development".
  > git add .
  >
  > git commit -m "hice algunos cambios"
- Sube los cambios a Github.
  > git push -u origin development

## 5. Hacer un merge

- Vuelve a la rama "main".

  NOTA: En este punto no tenía la rama “main” en local, si no tan solo “master” y “development”. Por lo que la descargué del remoto y creé la rama en local apuntando a la “main” del remoto.

  > git fetch origin main
  >
  > git checkout -b main origin/main

- Haz un merge de la rama "development" a la rama "main".
- Si no hay conflictos, los cambios realizados en la rama "development" se incorporarán a la rama "main".

  NOTA: Aquí tuve algún problema porque la rama "main" no tenía 'conexión' alguna con la rama “development”. Asi qué traje los cambios de la rama “development” a la rama “main”, y así luego desde “main” pude hacer merge.

  > git checkout development
  >
  > git rebase main
  >
  > git checkout main
  >
  > git merge development

- Haz un push de los cambios al repositorio en GitHub.
  > git push origin main

## Adicional:

Hice algún cambio al readme.md del "main" desde Github y lo actualicé en mi repositorio local con:

> git pull origin main
