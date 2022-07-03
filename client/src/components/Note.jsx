import Preview from './Preview';

const Note = ({ currentNote }) => {
  return (
    <>
      <div className='flex justify-between px-1 w-full'>
        <h2 className='text-xl md:text-2xl font-medium'>{currentNote.title}</h2>
        <p className='text-lg md:text-2xl'>{currentNote.category}</p>
      </div>
      <div className='max-w-full'>
        <Preview body={currentNote.body} />
      </div>
    </>
  );
}

export default Note;