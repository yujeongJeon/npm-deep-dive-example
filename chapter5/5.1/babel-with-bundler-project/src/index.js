import { sleep } from "./promise";
import { sum } from "./arrowFunction";
import {mergedObject} from "./spreadOperator";


const loadHiddenElement = async (delay) => {
  const loadingElement = document.getElementById('loading')
  const hiddenElement = document.getElementById('hidden')

  await sleep(delay)

  loadingElement.style.display = 'none'
  hiddenElement.style.display = 'block'
}

async function main() {
  document.addEventListener('DOMContentLoaded', async () => {
    /** sum(1, 2)의 반환값을 DOM에 표시 */
    const total = sum(1, 2)
    const sumElement = document.createElement('div')
    sumElement.innerHTML = `<p>sum: ${total}</p>`
    document.body.appendChild(sumElement)

    /** mergedObject({a: 1}, {b: 2})의 반환값을 DOM에 표시 */
    const merge = mergedObject({a: 1}, {b: 2})
    const mergeElement = document.createElement('div')
    mergeElement.innerHTML = `<p>mergeObject: ${JSON.stringify(merge)}</p>`
    document.body.appendChild(mergeElement)

    /** sleep(3000) 이후에 hiddenElement 표시 */
    loadHiddenElement(3000)
  })
}

main();
