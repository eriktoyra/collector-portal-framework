import * as React from 'react';
const Collapse = require('react-css-collapse'); // `require` to suppress "missing declaration file warning"
import glamorous from 'glamorous';
import { css } from 'glamor';
import * as uniqid from 'uniqid';
import { Alert } from '../Alert';
import { Label } from '../Label';
import { RadioButton } from './';

const RadioButtonGroupContainer = glamorous.div({
    marginBottom: '1.25em',
});

const RadioButtonList = glamorous.ul({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
});

const KidsContainer = glamorous.div({
    overflow: 'hidden',
    marginLeft: 34,
    maxWidth: 500 - 34,
});

const transition = css({
    transition: 'height 150ms',
});

export interface RadioButtonItem {
    key: string;
    label: string | JSX.Element;
    child?: JSX.Element;
}

interface Props {
    label: string | JSX.Element;
    items: RadioButtonItem[];
    selected: string;
    disabled?: boolean;
    optional?: boolean;
    error?: string | boolean;
    onChange: (key: string) => void;
}

interface State {
    name: string;
}

export class RadioButtonGroup extends React.Component<Props, State> {
    static displayName = 'Collector.RadioButtonGroup';

    state: State = {
        name: uniqid(),
    };

    private handleChange = (key: string) => {
        this.props.onChange(key);
    }

    render() {
        const { label, items, selected, disabled, optional, error } = this.props;

        return (
            <RadioButtonGroupContainer>
                <Label optional={optional}>{label}</Label>
                <RadioButtonList>
                    {items.map(item => (
                        <li key={item.key}>
                            <RadioButton
                                label={item.label}
                                name={this.state.name}
                                selected={item.key === selected}
                                disabled={disabled}
                                onChange={() => this.handleChange(item.key)}
                            />
                            <Collapse isOpen={item.key === selected} className={`${transition}`}>
                                <KidsContainer>{item.child}</KidsContainer>
                            </Collapse>
                        </li>
                    ))}
                </RadioButtonList>
                {error && typeof error === 'string' && <Alert type="error" message={error} alertSize="small" />}
            </RadioButtonGroupContainer>
        );
    }
}
