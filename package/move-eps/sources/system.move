module eps::system {
    use eps::component::Counter;

    public entry fun counter_change(counter:&mut Counter){
        eps::component::counter_change(counter)
    }
}
