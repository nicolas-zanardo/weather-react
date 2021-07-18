import {Component} from "react";
import styles from './ReturnToSearch.module.scss';
import {IconFa} from "../layout/IconFa";

/**
 * @class ReturnToSearch
 * @description Allows you to return to the home page with history props
 */
export default class ReturnToSearch extends Component<{ history: string[] }, {}> {

    private returnSearch = () => {
        this.props.history.push('/');
    }

    render() {
        return(
            <button className={styles.container + " shadow"} onClick={this.returnSearch}>{IconFa.Instance.faArrowBack} New Search</button>
        )
    }
}