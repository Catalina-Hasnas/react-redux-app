import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab/Tab';
import styles from "./Tabs.module.css";

class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    state = {
        activeTab: this.props.children[0].props.label,
    };
    
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }

    render() {
        const {
          onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
    
        return (
          <div>
            <ul className={styles.tabList}>
              {children.map((child) => {
                const { label } = child.props;
                
                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ul>
            <div>
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
        );
    }
}

export default Tabs;