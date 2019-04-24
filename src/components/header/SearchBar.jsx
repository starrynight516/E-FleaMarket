import React, { Component } from 'react';
import { Menu, Search } from 'semantic-ui-react'
import axios from 'axios';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      lists: [],
      results: [],
      value: '',
      noResultsMessage: '搜索中...',
    };
  }

  componentDidMount() {
    axios
    .get('/data/database.json')
    .then(res => this.setState({
      lists: res.data,
    }))
    .catch(err => console.log(err))
  }

  handleResultSelect = e => {
    this.setState({
      value: e.target.innerHTML,
    })
  }

  handleSearchChange = e => {
    const { lists } = this.state;

    this.setState({
      isLoading: true,
      value: e.target.value,
      noResultsMessage: '搜索中...',
    });

    setTimeout(() => {
      if (this.state.value.length < 1) {
        this.setState({
          isLoading: false,
          noResultsMessage: '暂无数据',
          results: [],
        });
        return;
      }
      
      const regSearch = new RegExp(this.state.value,'gim');
      let resultMatch = [];

      lists.map((item, index) => {
        item.name.search(regSearch) !== -1 && resultMatch.push({title: item.name})
      })

      resultMatch = resultMatch.length <= 5 ? resultMatch : resultMatch.slice(0,5);

      this.setState({
        isLoading: false,
        results: resultMatch,
        noResultsMessage: '暂无数据',
      })
    },500)
  }

  handleSearching = e => {
    if (e.keyCode !== 13 ) return;
    if (e.target.value.trim() === '') return;
    window.location.href = '/search?' + e.target.value;
  }

  render() {
    const { isLoading, results, value, noResultsMessage } = this.state;

    return (
      <Menu.Menu position='right'>
        <Search
          className='search-bar'
          placeholder='请输入商品名称'
          noResultsMessage={noResultsMessage}
          loading={isLoading}
          results={results}
          value={value}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          onKeyDown={this.handleSearching}
        />
      </Menu.Menu>
    );
  }
}