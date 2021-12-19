import { css } from './css'

describe('css',()=>{
  test('empty string',()=>{
    expect(css``).toMatchInlineSnapshot()
  })

  test('normal string',()=>{
    expect(css`color: red;`).toMatchInlineSnapshot()
  })

  test('with string as argument',()=>{
    expect(css`color: ${ "red" };`).toMatchInlineSnapshot()
  })

  test('with number',()=>{
    expect(css`order: ${ 1 };`).toMatchInlineSnapshot()
  })

  test('with bigint',()=>{
    expect(css`order: ${ 1n };`).toMatchInlineSnapshot()
  })

  test('with boolean',()=>{
    expect(css`order: ${ true };`).toMatchInlineSnapshot()
    expect(css`order: ${ false };`).toMatchInlineSnapshot()
  })

  test('with undefined',()=>{
    expect(css`order: ${ undefined };`).toMatchInlineSnapshot()
  })

  test('with null',()=>{
    expect(css`order: ${ null };`).toMatchInlineSnapshot()
  })
})
