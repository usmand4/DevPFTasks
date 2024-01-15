<template>
  <!-- <router-view></router-view> -->
  <div id="app">
      <TableList />
  </div>
  </template>
  
  <script>
  import TableList from './components/TableList.vue'
  export default {
  
      name: "App",
      components: {
          TableList,
      },
  }
  </script>
  
  <style>
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      padding: 2rem;
      background-color: #f3f6f1;
      min-height: 100vh;
      color: #0c0b0b;
  }
  
  h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
  }
  
  .data-table {
      width: 100%;
      overflow-x: auto;
      border-collapse: collapse;
      margin-top: 1rem;
  }
  
  .data-table th,
  .data-table td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: center;
  }
  
  .data-table th {
      background-color: #f4f5f7;
      color: #0c0c0c;
  }
  
  .data-table input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
  }
  
  .dropdown {
      position: relative;
      display: inline-block;
  }
  
  .dropdown button {
      padding: 5px 10px;
      cursor: pointer;
  }
  
  .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
  }
  
  .dropdown-content label {
      display: block;
      padding: 8px;
      cursor: pointer;
  }
  
  .dropdown:hover .dropdown-content {
      display: block;
  }
  
  .actions {
      display: flex;
      justify-content: space-between;
  }
  
  .update-button,
  .delete-button,
  .del-btn {
      padding: 8px 12px;
      margin: 4px;
      cursor: pointer;
      color: #fff;
      border: none;
      border-radius: 4px;
      text-align: center;
  }
  
  .update-button {
      background-color: #3498db;
  }
  
  .delete-button,
  .del-btn {
      background-color: #e90909;
  }
  
  .del-btn {
  
      float: right;
  }
  
  .cancel-button,
  .add-button {
      padding: 3px 10px;
      margin: 4px;
      cursor: pointer;
      color: #fff;
      border: none;
      border-radius: 4px;
      width: 27%;
      text-align: center;
  }
  
  .cancel-button {
      background-color: #034e6a;
  }
  
  .add-button {
      background-color: #f39c12;
  }
  
  .updated-div input,
  .add-div input {
      margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
  
      .add-div,
      .updated-div {
          grid-template-columns: 1fr;
      }
  }
  </style>
  