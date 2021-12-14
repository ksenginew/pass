import { exec } from "child_process"
import { readFileSync } from 'fs'
test('test cli', () => {
    exec("node bin/cli.js bin/fortest.js --output=bin/fortest.css", (error, stdout, stderr) => {
        if (error) {
            throw error
            return;
        }
        if (stderr) {
            throw stderr
            return
        }
    });
    expect(readFileSync('bin/fortest.css').toString()).toBe('this is CSS')
})
