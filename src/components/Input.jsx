import React, { useState } from 'react';

import '../scss/components/Input.scss';

/**
 * @param {{
 * 	placeholder: string,
 * 	id: string,
 * 	type?: string
 * }} props
 * @returns
 */
function Input(props) {
	const [value, setValue] = useState('');

	const { placeholder, id, type } = props;

	/**
	 * @param {React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>} event
	 */
	const handleInput = event => {
		event.preventDefault();

		const { value: newValue } = event.currentTarget;

		setValue(newValue);
	};

	return (
		<div
			id={id}
			className={`input-wrapper ${value === '' ? '' : 'filled'}`.trim()}
			placeholder={placeholder}
		>
			{type && type === 'textarea' ? (
				<textarea id={id} cols={30} rows={15} onChange={handleInput} />
			) : (
				<input type='text' defaultValue={value} onChange={handleInput} />
			)}
		</div>
	);
}

export default Input;
