
### GITFLOW:

#### Crear una rama de desarrollo:

```bash

git checkout -b development

`

**Subir la rama de desarrollo:**

git push -u origin development

Hacer feature:

git checkout -b feature/nombre_de_la_feature
git add .
git commit -m "Mensaje descriptivo de la feature"
git push -u origin feature/nombre_de_la_feature

Una vez terminada la feature:

git checkout development
git merge feature/nombre_de_la_feature
git branch -d feature/nombre_de_la_feature
git push origin development
git push origin --delete feature/test
