import Comment from '../../components/ui/Comment';

const mocks = {
  comment: {
    _id: '1234',
    title: 'Super',
    comment: 'What a route!',
    rating: 4.6,
    comment_rating: 0,
    votes: {
      Andreas: 1,
    },
  },
  onClick: () => true,
  user: 'Andreas',
};

describe('<Comment>', () => {
  it('mounts and checks if comment is rendering', () => {
    cy.mount(<Comment {...mocks} />);
    cy.contains('Super');
    cy.contains('What a route!');
  });
});
