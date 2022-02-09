# TDD 101 - TS Version

Denna kodbas utgör version 2 av Omegapoints TDD 101-kurs. 

Kursen ges tills vidare av Carl Rosengren och Arvid Larsson, och är baserad på tidigare kursmaterial av Pia Fåk Sunnanbo, Martin Carlsson, Henrik Stensson, Madelen Hermelin.

## Förberedelser

Klona repot.

Installera node om du inte redan har det. (`brew install node` på Mac. se https://nodejs.org/en/download/package-manager/ för övriga). 

`node -v` = v17.x.x

Vi rekommenderar att köra VSCode. https://code.visualstudio.com/ Men vilken editor som helst funkar.

Öppna projektet och kör `npm install` i projektets rot.

Kör sedan `npm test`. Du bör få något i den här stilen:

```ts
> tdd-lab@1.0.0 test
> jest

 PASS  src/example.test.ts
 FAIL  src/index.test.ts
  ● Test suite failed to run

    Your test suite must contain at least one test.

      at onResult (node_modules/@jest/core/build/TestScheduler.js:175:18)
      at node_modules/@jest/core/build/TestScheduler.js:316:17
      at node_modules/emittery/index.js:260:13
          at Array.map (<anonymous>)
      at Emittery.emit (node_modules/emittery/index.js:258:23)

Test Suites: 1 failed, 1 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.206 s, estimated 1 s
Ran all test suites.
```

## Tips

Kör `npm test -w` så slipper du köra kommandot varje gång du sparar en fil.

`expect(funktion).toHaveBeenCalled()`
