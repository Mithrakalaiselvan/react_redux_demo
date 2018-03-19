import React,{PropTypes} from 'react';
import CourseListRow from './CourseListRow';
import DateTimeField from 'react-bootstrap-datetimepicker';

const CourseList = ({courses}) => {
	return (
		<div>
		  <div>
			<table className="table">
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Title</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
					</tr>
				</thead>
				<tbody>
				{courses.map(course => 
					<CourseListRow key={course.id} course={course}/>
				)}
				</tbody>
			</table>
		  </div>
			<div className="row">
          		<DateTimeField mode="date"/>
      		</div>
		</div>
	);
};

CourseList.propTypes = {
	courses: PropTypes.array.isrequired
};

export default CourseList;