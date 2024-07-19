import { sleep } from "./promise";
import { sum } from "./arrowFunction";
import { pick } from "./optionalChaining";

const CITIES = {
    서울: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구"
    ],
    부산: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군"
    ]
}

const createSelect = ({
  id,
  label,
  options,
  onChange
}) => {
  const fragment = document.createDocumentFragment()

  const selectElement = document.createElement('select')
    selectElement.id = id
    const labelElement = document.createElement('label')
    labelElement.htmlFor = id
    labelElement.innerHTML = label
    labelElement.id = `${id}-label`

    const initialOptionElement = document.createElement('option')
    initialOptionElement.value = 'unknown'
    initialOptionElement.label = '선택'
    selectElement.appendChild(initialOptionElement)

    options.forEach((value) => {
      const optionElement = document.createElement('option')

      optionElement.value = value
      optionElement.label = value

      selectElement.appendChild(optionElement)
    })

    selectElement.addEventListener('change', onChange)

    fragment.appendChild(labelElement)
    fragment.appendChild(selectElement)
    document.body.appendChild(fragment)
}

const removeExistingSelect = (id) => {
  const selectElement = document.getElementById(id)
  const labelElement = document.getElementById(`${id}-label`)
        
  if (selectElement) {
    document.body.removeChild(selectElement)
    document.body.removeChild(labelElement)
  }
}

async function main() {
  document.addEventListener('DOMContentLoaded', async () => {
    /** sum(1, 2)의 반환값을 DOM에 표시 */
    const total = sum(1, 2)
    const sumElement = document.createElement('div')
    sumElement.innerHTML = `<p>sum: ${total}</p>`
    document.body.appendChild(sumElement)

    /** 시/구를 선택하는 요소 예시 */
    createSelect({
      id: 'Si',
      label: '시',
      options: Object.keys(CITIES),
      onChange: (e) => {
        removeExistingSelect('Gu')

        const selectedSi = e.target.value
  
        const guOptions = pick(CITIES, selectedSi)
  
        // 선택한 '시'가 없으면 '구' select 요소를 DOM에 추가하지 않음
        if (guOptions === 'unknown') {
          return;
        }

        createSelect({
          id: 'Gu',
          label: `구`,
          options: guOptions,
          onChange: (e) => {
            const selectedGu = e.target.value
            console.log(`${selectedSi}시 ${selectedGu}를 선택하였습니다.`)
          }
        })
      }
    })

    /** sleep(3000) 이후에 hiddenElement 표시 */
    const loadingElement = document.getElementById('loading')
    const hiddenElement = document.getElementById('hidden')

    await sleep(3000)

    loadingElement.style.display = 'none'
    hiddenElement.style.display = 'block'
  })
}

main();
