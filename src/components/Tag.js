import './Tag.css';

/** Simple render of a Tag 'button'
 *
 * Props:
 * - tag: string of a tag word
 *
 * { StudentCard } -> Tag
 **/
function Tag({tag}) {
  return (
    <div className="tag"> {tag}</div>
  )
}

export default Tag;