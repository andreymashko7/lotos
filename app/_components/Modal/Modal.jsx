const Modal = ({ children }) => {
	return (
		<div className={`${s.modal} ${a.active}`}>
			<div className={`${s.modal_content} ${a.active}`}>{children}</div>
		</div>
	);
};

export default Modal;
