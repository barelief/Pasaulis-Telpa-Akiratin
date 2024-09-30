// The body of the poem with autor name at the bottom

interface PoemBodyProps {
  body: string,
  author: string
}

const PoemBody = ({ body, author }: PoemBodyProps) => (
  <div>
    <pre className="pt-4 pb-4 poem-body">{body}</pre>
    <span className="text-sm uppercase poem-author font-bold pt-4 pb-4">© {author}</span>
  </div>
);

export default PoemBody;

