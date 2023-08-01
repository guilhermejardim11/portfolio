import PageTitle from '../components/Page/PageTitle';

const Template = (props) => {
	return (
		<>
			<PageTitle title={props.title} />
			<div className='page_content'>{props.children}</div>
		</>
	);
};

export default Template;
