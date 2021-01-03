declare module 'tafqit/tafqit'{
  export function tafqit(NumIn: number, options: {
    Feminine?: "on",
    Miah?: "on",
    SplitHund?: "on",
    Comma?: "on",
    Billions?: "on",
    AG?: "on",
    TextToFollow?: "on",
    Subject?: [string, string, string, string],
    Legal?: "on" | "off",
  })
}
