<template>
    <div class="container">
        <h1>Sushi UI</h1>
        <h2>古いデスクトップアプリ風UIツールキット</h2>
    
        <p>
          スキューモーフィック / 省スペース / レイヤレス（ダイアログよりトースト）</p>
    
        <div>
          <ui-button>Test</ui-button>
          <button>
            こんな感じのそっけないボタン
          </button>
          <button style="color: #d6c4ff;">
            どやねん
          </button>
        </div>
        <div>
            <label>
                <input type="radio">
                ラジオボタン
            </label>
            <label>
                <input type="checkbox">
                チェックボックス
            </label>
            <textarea>Hello</textarea>
        </div>
        <div>
            <label>
                Name <input type="text" value="Yamada Taro">
            </label>
          
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  
  <style>

  </style>