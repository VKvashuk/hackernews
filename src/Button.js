import React, { Component } from 'react';

class Button extends Component{

  render() {
  	const {
      onClick,
      className = '',
      children,
    } = this.props
    return (
    	<button
	      onClick={onClick}
	      className={className} 
	      type="button"
	    >
	    {children}
	    </button>
    )
  }
}

const Loading = () => 
  <div>Загрузка ...</div>

const withLoading = (MyComponent) => ({
  isLoading, ...rest }) => 
    isLoading
      ? <Loading />
      : <MyComponent { ...rest } />

const ButtonWithLoading = withLoading(Button);

export {
  Button,
  ButtonWithLoading,
};