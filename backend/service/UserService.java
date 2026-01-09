@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    public List<User> findAll() {
        return repository.findAll();
    }
    
    public User create(CreateUserRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setCity(request.getCity());
        return repository.save(user);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}