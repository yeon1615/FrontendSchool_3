const main = document.querySelector('.artcl_main');
const userTask = main.querySelector('header input');
const addBtn = main.querySelector('header button');
const listTodo = main.querySelector('.list_todo');

// 할일 추가 이벤트
addBtn.addEventListener('click', createListItem);

// 경고 메세지 생성
const message = document.createElement('strong');
message.style.display = 'none';
message.classList.add('txt_invalid');
main.appendChild(message);

userTask.addEventListener('input', () => {
  message.style.display = 'none';
});

// 다운로드 버튼 생성
const btnDownload = document.createElement('button');
btnDownload.classList.add('btn');
btnDownload.textContent = '리스트 다운로드';
main.appendChild(btnDownload);
btnDownload.addEventListener('click', downloadFile);

// 투두를 저장할 배열
const tasks = JSON.parse(localStorage.getItem('tasklist')) || [];

// 초기 화면에서 저장되어있는 데이터를 가지고 목록을 생성해서 뿌려주기
if (tasks.length > 0) {
  tasks.forEach((item) => {
    genItem(item.val, item.checked);
  });
  showDownload();
}

function createListItem() {
  const inpVal = userTask.value;
  if (inpVal) {
    // 유저가 입력한 할일을 저장하는 객체 생성
    const tempTask = {
      val: inpVal,
      checked: false,
    };
    // 할일 목록에 새로운 할일을 저장
    tasks.push(tempTask);

    // 목록 요소를 생성
    // 두 번째 인자는 우리가 만든 todo 아이템을 수행했는지! 디폴트값인 false 전달
    genItem(inpVal, false);

    // 로컬스토리지에 할일 데이터를 저장
    saveTasks();

    // 다운로드 버튼 노출 여부를 처리
    showDownload();
  } else {
    // 예외처리
    errorMsg('내용을 작성해주세요');
  }
}

// 목록 요소 생성
function genItem(val, complete) {
  const li = document.createElement('li');
  li.textContent = val;
  listTodo.appendChild(li);
  // 인풋 입력값 초기화
  userTask.value = '';

  if (complete) {
    li.classList.add('done');
  }
  li.addEventListener('click', () => {
    li.classList.toggle('done');
    // 할일 데이터 업데이트 함수 (checked 속성이 true인지 false인지, 삭제한 task는 없애는 등 업데이트)
    buildTasks();
  });

  // 삭제 버튼 만들기
  const btn = document.createElement('button');
  btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  li.appendChild(btn);
  btn.addEventListener('click', () => {
    li.remove();

    // 할일 데이터 업데이트 함수
    buildTasks();
    // 다운로드 버튼 노출 함수
    showDownload();
  });
}

// 로컬 스토리지에 할일 목록을 저장하는 함수
function saveTasks() {
  localStorage.setItem('tasklist', JSON.stringify(tasks));
}

// 할일 정보를 업데이트하는 함수! 할 일을 클릭했을 때(complete) 혹은 할 일을 제거했을 때
function buildTasks() {
  tasks.length = 0; // 업데이트 전에 기존 데이터를 초기화
  // 후에 모든 리스트를 다시 가져옴, 즉 최신으로 재생성
  const currentList = listTodo.querySelectorAll('li');
  currentList.forEach((item) => {
    const tempTask = {
      val: item.textContent,
      checked: false,
      // 기본값이므로 일단 false 넣은 것
    };
    if (item.classList.contains('done')) {
      tempTask.checked = true;
    }
    tasks.push(tempTask);
  });
  saveTasks();
}

// 다운로드 버튼 노출 판단하는 함수
function showDownload() {
  const currentList = listTodo.querySelectorAll('li');
  if (currentList.length > 0) {
    btnDownload.style.display = 'block';
  } else {
    btnDownload.style.display = 'none';
  }
}

// 경고 메세지 활성화 함수
function errorMsg(msg) {
  message.style.display = 'block';
  message.textContent = msg;
  userTask.focus();
}

// 다운로드 함수
function downloadFile() {
  let temp = `<나의 할일 목록>\n\n`;

  const currentList = listTodo.querySelectorAll('li');
  currentList.forEach((item) => {
    if (item.classList.contains('done')) {
      temp += '완료 - ';
    }
    temp += `${item.textContent}\n`;
  });
  // 화면에 보여주진 X 메모리상에서만 존재함
  let element = document.createElement('a');
  element.setAttribute('href', `data:text/plain; charset=utf-8, ${temp}`);
  element.setAttribute('download', 'todolist.txt');
  // 클릭 가능한 요소라면 클릭을 시뮬레이션함 (앵커를 클릭한 것과 똑같은 현상을 발생시킴)
  element.click();
  // 클릭이 완료되면 필요가 없어지는 요소이므로 메모리상에서 제거해야 함 (자스 엔진 안에 있는 가비지 컬렉터가 지워줌)
  element = null;
}
