import { exec } from "child_process"
import { readFileSync } from 'fs'
test(() => {
    exec("node bin/cli.js fortest.js fortest.css", (error, stdout, stderr) => {
        if (error) {
            throw error
            return;
        }
        if (stderr) {
            throw stderr
            return
        }
    });
    expect(readFileSync('fortest.css').toString()).toBe('this is CSS')
})
