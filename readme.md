Conexiunea cu github:



(prima data, cand cream un nou repo)

"git clone git@github....-skillbrain-momo.git" (linkul se ia din rubrica SSH)

(optional) "git remote -v" - vedem linkul de conectare la github

(optional) "git status" - sa vedem care e statusul nostru



PUSH (impingem codul local catre github. Ne straduim sa nu facem push niciodata pe branch-ul main)



1.(optional) git status

[aici trebuie sa fie curat, fara modificari active, daca sunt modificari active trebuie fie de renuntat la ele sau sa le adaugam. Intr-un final trebuie sa fie afisat asta: Nothing to commit, working tree clean"]

Pentru a renunta la modificari active, se poate scrie comanda: "git stash"



(important) Sa ne asiguram ca suntem in dosarul parinte (unde s-a copiat repository-ul) si nu in subdosare.



2. git checkout main



3. git pull origin main (actualizam branchul main din github in local) (se mai poate folosi comanda de git rebase)



4.git checkout -b sprint7



// Incepem lucru: cream un dosar nou "sprint7" si punem acolo toate fisierele necesare

// Cand terminal lucru:



5. git add .

6.git commit -m "Add readme.md"

7.git push origin sprint7



8.[se creeaza un PR - Pull Request]

9.[se creeaza un ticket pe notion cu linkul la PR]

[se asteapta confirmarea]

10. [doar dupa ce exista confirmarea se apasa Merge la Pull Request]